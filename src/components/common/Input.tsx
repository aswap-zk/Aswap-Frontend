import styled from "styled-components";
import IcAleo from "../../assets/icons/tokens/ic-aleo.svg";
import IcWEth from "../../assets/icons/tokens/ic-wEth.svg";
import IcEth from "../../assets/icons/tokens/ic-eth.svg";
import IcKlay from "../../assets/icons/tokens/ic-klay.svg";
import IcInvi from "../../assets/icons/tokens/ic-invi.svg";
import IcChevron from "../../assets/icons/Staking/ic-chevronDown.svg";

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

export interface InputProps {
  topLabelText?: string; // 상단 라벨
  value: string; // input에서 처리할 값
  setValue: (input: string) => void; // 처리값에 대한 set함수
  placeholder: string;
  ticker?: InputTicker; // input값의 단위를 표시하는 ticker 이름 및 아이콘
  leftLabelTexts?: string[]; // 하단 좌측 도움말
  rightLabelTexts?: string[]; // 하단 우측 도움말
  maxBtnOnClick?: () => void;
  selectList?: string[];
  selectedValue?: string;
  setSelectedValue?: (select: string) => void;
  readonly?: boolean;
}

export const Input = (props: InputProps) => {
  const {
    topLabelText,
    value,
    setValue,
    placeholder,
    ticker,
    leftLabelTexts,
    rightLabelTexts,
    maxBtnOnClick,
    selectList,
    selectedValue,
    setSelectedValue,
    readonly,
  } = props;

  function onChangeHandler(value: string) {
    let inputValue = value;
    // Remove all commas for processing
    inputValue = inputValue.replace(/,/g, "");

    // 숫자와 소수점만 입력 가능한 정규식 검사
    if (!/^[\d.]*$/.test(inputValue)) return;

    // 소수점은 하나만 허용
    if ((inputValue.match(/\./g) || []).length > 1) return;

    // 숫자는 1,000 단위마다 콤마로 구분
    const parts = inputValue.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    setValue(parts.join("."));
  }

  return (
    <Root>
      {topLabelText && <LargeLabel>{topLabelText}</LargeLabel>}
      <InputWrapper>
        <input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChangeHandler(e.target.value)}
          readOnly={readonly}
          style={{
            cursor: readonly ? "default" : "auto",
          }}
        />
        <TickerWrapper>
          {maxBtnOnClick && <MaxButton onClick={maxBtnOnClick}>MAX</MaxButton>}
          {ticker && (
            <>
              <TickerImage
                src={ticker.image}
                $isAleo={ticker.name === "ALEO" ? true : false}
              />
              <span>{ticker.name}</span>
            </>
          )}
          {selectList && setSelectedValue && (
            <SelectWrapper>
              <StyledSelect
                onChange={(e) => {
                  setSelectedValue(e.target.value);
                }}
                value={selectedValue}
              >
                {selectList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </StyledSelect>
              <img src={IcChevron} />
            </SelectWrapper>
          )}
        </TickerWrapper>
      </InputWrapper>
      <BottomLabelWrapper>
        {leftLabelTexts && (
          <div>
            {leftLabelTexts.map((text) => {
              return <span key={text}>{text}</span>;
            })}
          </div>
        )}
        {rightLabelTexts && (
          <div>
            {rightLabelTexts.map((text) => {
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
  align-items: center;

  span {
    ${({ theme }) => theme.fonts.Body_Text_Large};
    color: #09090a;
  }
`;

const TickerImage = styled.img<{ $isAleo?: boolean }>`
  width: 26px;
  height: 26px;
  ${({ $isAleo }) =>
    $isAleo && "filter: drop-shadow(0px 6px 14px rgba(98, 98, 105, 0.15));"};
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

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0px 12px;

  border-radius: 20px;
  border: 1px solid #e8e8ee;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(184, 184, 184, 0.3);
  ${({ theme }) => theme.fonts.Body_Text_Large};

  img {
    width: 20px;
    height: 20px;
  }
`;

const StyledSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearence: none;
  border: none;
  ${({ theme }) => theme.fonts.Body_Text_Large};
  padding: 6px 2px;
  &:focus {
    outline: none;
  }
`;
