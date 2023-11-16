import styled from "styled-components";
import IcAleo from "../../assets/icons/tokens/ic-aleo.svg";
import IcWEth from "../../assets/icons/tokens/ic-wEth.svg";
import IcEth from "../../assets/icons/tokens/ic-eth.svg";
import IcKlay from "../../assets/icons/tokens/ic-klay.svg";
import IcInvi from "../../assets/icons/tokens/ic-invi.svg";

interface InputTicker {
  image: string;
  name: string;
}

type InputTickersType = Record<string, InputTicker>;
// input값에 붙는 단위 추가시 이미지 및 표시되는 이름 추가 필요
export const INPUTTICKERS: InputTickersType = {
  aleo: { image: IcAleo, name: "ALEO" },
  wEth: { image: IcWEth, name: "wETH" },
  eth: { image: IcEth, name: "ETH" },
  klay: { image: IcKlay, name: "Klay" },
  invi: { image: IcInvi, name: "INVI" },
};

interface InputProps {
  topLabelText?: string; // 상단 라벨
  value: string; // input에서 처리할 값
  setValue: (input: string) => void; // 처리값에 대한 set함수
  placeholder: string;
  ticker?: InputTicker; // input값의 단위를 표시하는 ticker 이름 및 아이콘
  leftLabelTexts?: string[]; // 하단 좌측 도움말
  rightLabelTexts?: string[]; // 하단 우측 도움말
  maxBtnOnClick?: () => void;
}

export const Input = (props: InputProps) => {
  return (
    <Root>
      {props.topLabelText && <LargeLabel>{props.topLabelText}</LargeLabel>}
      <InputWrapper>
        <input
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
        />
        <TickerWrapper>
          {props.maxBtnOnClick && (
            <MaxButton onClick={props.maxBtnOnClick}>MAX</MaxButton>
          )}
          {props.ticker && (
            <>
              <TickerImage
                src={props.ticker.image}
                isAleo={props.ticker.name === "ALEO" ? true : false}
              />
              <span>{props.ticker.name}</span>
            </>
          )}
        </TickerWrapper>
      </InputWrapper>
      <BottomLabelWrapper>
        {props.leftLabelTexts && (
          <div>
            {props.leftLabelTexts.map((text) => {
              return <span key={text}>{text}</span>;
            })}
          </div>
        )}
        {props.rightLabelTexts && (
          <div>
            {props.rightLabelTexts.map((text) => {
              return <span key={text}>{text}</span>;
            })}
          </div>
        )}
      </BottomLabelWrapper>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LargeLabel = styled.span`
  color: #33343e;
  ${({ theme }) => theme.fonts.Body_Text_Medium_2};
  padding-left: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 24px 22px 24px 30px;
  border-radius: 20px;
  border: 1px solid #d1d1d1;

  input {
    width: 100%;
    ${({ theme }) => theme.fonts.Title_Large};
    color: #15151a;
    outline: none;
    border: none;

    &::placeholder {
      color: #e8e8ee;
    }
  }
`;

const TickerWrapper = styled.div`
  display: flex;
  gap: 7px;
  justify-content: center;

  span {
    ${({ theme }) => theme.fonts.Body_Text_Large};
    color: #09090a;
  }
`;

const TickerImage = styled.img<{ isAleo?: boolean }>`
  width: 26px;
  height: 26px;
  ${({ isAleo }) =>
    isAleo && "filter: drop-shadow(0px 6px 14px rgba(98, 98, 105, 0.15));"};
`;

const MaxButton = styled.div`
  padding: 4px 8px;
  border-radius: 4px;
  background: #f2faff;
  ${({ theme }) => theme.fonts.Label_Medium_2};
  color: #00a3ff;
`;

const BottomLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 11px;

  div {
    display: flex;
    gap: 10px;
  }
  span {
    ${({ theme }) => theme.fonts.Label_Medium};
    color: #4a5967;
    white-space: pre-line;
  }
`;
