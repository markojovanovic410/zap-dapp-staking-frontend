import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

export const Divider = styled.div`
  height: 1px;

  background: linear-gradient(
    90deg,
    rgba(245, 245, 245, 0.058) 0%,
    rgba(245, 245, 245, 0.2) 52.08%,
    rgba(245, 245, 245, 0.058) 100%
  );
`;

export const CustomButton = styled.button`
  border-radius: 2px;
  padding: 10px 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  border: none;
  cursor: pointer;
`;

export const PrimaryButton = styled(CustomButton)<{ full?: boolean }>`
  background: #058ad4;
  color: #f5f5f5;
  width: ${(props) => (props.full ? "100%" : "auto")};

  &:hover {
    background: #2ea3e4;
  }

  &:active {
    background: rgba(5, 138, 212, 0.4);
    color: rgba(245, 245, 245, 0.72);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.1);
    color: #999;
  }
`;

export const PrimaryLargeButton = styled(PrimaryButton)`
  padding: 13px 24px;
`;

export const SecondaryButton = styled(CustomButton)`
  background: transparent;
  color: #058ad4;
  border: 1px solid #058ad4;

  &:hover {
    color: #2ea3e4;
    border-color: #2ea3e4;
  }

  &:active {
    border-color: rgba(5, 138, 212, 0.4);
    color: rgba(5, 138, 212, 0.72);
  }
`;

export const SecondaryLargeButton = styled(SecondaryButton)`
  padding: 13px 24px;
`;

export const ThirdButton = styled(CustomButton)`
  background: #373737;
  color: #f5f5f5;
`;

export const ForthButton = styled(CustomButton)`
  border: 1px solid rgba(245, 245, 245, 0.2);
  background: transparent;
  color: #f5f5f5;
`;

const StyledToast = styled.div.attrs((props: { type: string }) => props)`
  position: fixed;
  top: 32px;
  right: 12px;
  background: rgba(28, 28, 28, 0.96);
  box-shadow: 0px 76px 152px rgba(0, 0, 0, 0.16),
    0px 22.9118px 45.8236px rgba(0, 0, 0, 0.104254),
    0px 9.51638px 19.0328px rgba(0, 0, 0, 0.08),
    0px 3.44189px 6.88378px rgba(0, 0, 0, 0.0557458);
  border-radius: 2px;
  padding: 24px;
  color: ${(props) =>
    props.type === "success"
      ? "#2ECA6D"
      : props.type === "error"
      ? "#E02B2B"
      : props.type === "warning"
      ? "#ECAF41"
      : "#F5F5F5"};
  border: none;
  display: flex;
  gap: 18px;
  align-items: center;
  z-index: 500;
`;

export const Toast = (props: any) => {
  return (
    <StyledToast type={props.type}>
      {props.type === "success" && (
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.48623 9.73002C5.35497 9.73028 5.22494 9.70463 5.10361 9.65452C4.98229 9.60441 4.87205 9.53083 4.77923 9.43802L0.537232 5.19502C0.441659 5.10284 0.365401 4.99255 0.312907 4.87058C0.260414 4.74861 0.232736 4.61741 0.231489 4.48464C0.230243 4.35186 0.255452 4.22016 0.305646 4.09723C0.35584 3.9743 0.430013 3.8626 0.523839 3.76864C0.617664 3.67468 0.729262 3.60035 0.852122 3.54998C0.974981 3.49961 1.10664 3.47422 1.23942 3.47528C1.3722 3.47634 1.50344 3.50383 1.62548 3.55615C1.74752 3.60847 1.85792 3.68457 1.95023 3.78002L5.48523 7.31502L11.8502 0.952016C12.0377 0.764375 12.2921 0.658907 12.5574 0.658814C12.8226 0.65872 13.0771 0.764008 13.2647 0.951516C13.4524 1.13902 13.5578 1.39339 13.5579 1.65866C13.558 1.92393 13.4527 2.17838 13.2652 2.36602L6.19323 9.43802C6.10041 9.53083 5.99018 9.60441 5.86885 9.65452C5.74752 9.70463 5.6175 9.73028 5.48623 9.73002Z"
            fill="#2ECA6D"
          />
        </svg>
      )}
      {props.type === "error" && (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2726 9L12.8187 6.4548C12.9876 6.28592 13.0825 6.05688 13.0825 5.81805C13.0825 5.57922 12.9876 5.35018 12.8187 5.1813C12.6498 5.01242 12.4208 4.91755 12.1819 4.91755C11.9431 4.91755 11.7141 5.01242 11.5452 5.1813L9 7.7274L6.4548 5.1813C6.28592 5.01242 6.05688 4.91755 5.81805 4.91755C5.57922 4.91755 5.35018 5.01242 5.1813 5.1813C5.01242 5.35018 4.91755 5.57922 4.91755 5.81805C4.91755 6.05688 5.01242 6.28592 5.1813 6.4548L7.7274 9L5.1813 11.5452C5.01242 11.7141 4.91755 11.9431 4.91755 12.1819C4.91755 12.4208 5.01242 12.6498 5.1813 12.8187C5.35018 12.9876 5.57922 13.0825 5.81805 13.0825C6.05688 13.0825 6.28592 12.9876 6.4548 12.8187L9 10.2726L11.5452 12.8187C11.7141 12.9876 11.9431 13.0825 12.1819 13.0825C12.4208 13.0825 12.6498 12.9876 12.8187 12.8187C12.9876 12.6498 13.0825 12.4208 13.0825 12.1819C13.0825 11.9431 12.9876 11.7141 12.8187 11.5452L10.2726 9ZM9 18C4.0293 18 0 13.9707 0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18Z"
            fill="#E02B2B"
          />
        </svg>
      )}
      {props.type === "warning" && (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8 1.6131L19.501 12.7741C20.464 14.3771 19.991 16.4861 18.444 17.4841C17.9248 17.8203 17.3196 17.9995 16.701 18.0001H3.298C1.477 18.0001 0 16.4701 0 14.5811C0 13.9421 0.173 13.3171 0.498 12.7741L7.2 1.6131C8.162 0.0101025 10.196 -0.480898 11.743 0.517102C12.171 0.793103 12.533 1.1681 12.8 1.6131ZM10 14.0001C10.2652 14.0001 10.5196 13.8947 10.7071 13.7072C10.8946 13.5197 11 13.2653 11 13.0001C11 12.7349 10.8946 12.4805 10.7071 12.293C10.5196 12.1055 10.2652 12.0001 10 12.0001C9.73478 12.0001 9.48043 12.1055 9.29289 12.293C9.10536 12.4805 9 12.7349 9 13.0001C9 13.2653 9.10536 13.5197 9.29289 13.7072C9.48043 13.8947 9.73478 14.0001 10 14.0001ZM10 5.0001C9.73478 5.0001 9.48043 5.10546 9.29289 5.293C9.10536 5.48053 9 5.73489 9 6.0001V10.0001C9 10.2653 9.10536 10.5197 9.29289 10.7072C9.48043 10.8947 9.73478 11.0001 10 11.0001C10.2652 11.0001 10.5196 10.8947 10.7071 10.7072C10.8946 10.5197 11 10.2653 11 10.0001V6.0001C11 5.73489 10.8946 5.48053 10.7071 5.293C10.5196 5.10546 10.2652 5.0001 10 5.0001Z"
            fill="#ECAF41"
          />
        </svg>
      )}
      {props.type === "info" && (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18C4.0293 18 0 13.9707 0 9C0 4.0293 4.0293 0 9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18ZM9 7.2C8.7613 7.2 8.53239 7.29482 8.3636 7.4636C8.19482 7.63239 8.1 7.8613 8.1 8.1V12.6C8.1 12.8387 8.19482 13.0676 8.3636 13.2364C8.53239 13.4052 8.7613 13.5 9 13.5C9.23869 13.5 9.46761 13.4052 9.6364 13.2364C9.80518 13.0676 9.9 12.8387 9.9 12.6V8.1C9.9 7.8613 9.80518 7.63239 9.6364 7.4636C9.46761 7.29482 9.23869 7.2 9 7.2ZM9 6.3C9.23869 6.3 9.46761 6.20518 9.6364 6.0364C9.80518 5.86761 9.9 5.63869 9.9 5.4C9.9 5.1613 9.80518 4.93239 9.6364 4.7636C9.46761 4.59482 9.23869 4.5 9 4.5C8.7613 4.5 8.53239 4.59482 8.3636 4.7636C8.19482 4.93239 8.1 5.1613 8.1 5.4C8.1 5.63869 8.19482 5.86761 8.3636 6.0364C8.53239 6.20518 8.7613 6.3 9 6.3Z"
            fill="#F5F5F5"
            fillOpacity="0.8"
          />
        </svg>
      )}
      {props.children}
    </StyledToast>
  );
};

const StyledBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(15, 15, 15, 0.35);
  // backdrop-filter: blur(4px);
  top: 0;
  left: 0;
  z-index: 101;
`;

const StyledDialog = styled.div<{
  width: string;
  height: string;
  center: boolean;
  padding: string;
  backImg: boolean;
  borderRadius: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: #171b26;
  box-shadow: 0px 76px 152px rgb(0 0 0 / 16%),
    0px 22.9118px 45.8236px rgb(0 0 0 / 10%),
    0px 9.51638px 19.0328px rgb(0 0 0 / 8%),
    0px 3.44189px 6.88378px rgb(0 0 0 / 6%);
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  text-align: ${(props) => (props.center === true ? "center" : "left")};
  background-image: url(${(props) => (props.backImg ? "" : "")});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media only screen and (max-width: 480px) {
    padding: 32px;
  }
`;

export const Dialog = (props: any) => {
  return (
    <StyledBackground>
      <StyledDialog
        width={props.width ? props.width : "auto"}
        height={props.height ? props.height : "auto"}
        center={props.center ? props.center : "false"}
        padding={props.padding ? props.padding : "48px"}
        borderRadius={props.borderRadius ? props.borderRadius : "2px"}
        backImg={props.backImg ? props.backImg : ""}
      >
        {props.children}
      </StyledDialog>
    </StyledBackground>
  );
};

const StyledInputBoxWrap = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  background: #202020;
  border: 0.7px solid rgba(245, 245, 245, 0.1);
  border-radius: 2px;
  line-height: 18px;
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
  height: 50px;
  caret-color: #ffffff;
  color: #f5f5f5;
  width: 100%;

  &:placeholder {
    color: rgba(245, 245, 245, 0.4);
  }

  &:hover {
    background: #2c2c2c;
    border-color: rgba(245, 245, 245, 0.2);
  }

  &:focus {
    background: #2c2c2c;
    border: 0.7px solid #058ad4;
  }

  &:focus-visible {
    outline: none;
  }
`;

const StyledLabel = styled.div`
  font-size: 17px;
  line-height: 18px;
  color: #f5f5f5;
  margin-bottom: 8px;
`;

const StyledRequired = styled.span`
  font-size: 17px;
  line-height: 18px;
  color: #f03030;
`;

const StyledHint = styled.div`
  margin-top: 8px;
  font-size: 14px;
  line-height: 18px;
  color: #f5f5f5;
`;

const StyledVerified = styled.div<{ label: boolean }>`
  display: flex;
  align-items: center;
  gap: 9px;
  position: absolute;
  left: 16px;
  top: ${(props) => (props.label ? "44px" : "19px")};
`;

const StyledHidden = styled.div`
  visibility: hidden;
`;

const StyledError = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #db2929;
  margin-top: 8px;
`;

const StyledErrorMark = styled.svg<{ label: boolean }>`
  position: absolute;
  right: 16px;
  top: ${(props) => (props.label ? "39px" : "14px")};
`;

const StyledPasswordShow = styled.svg<{ label: boolean }>`
  position: absolute;
  right: 16px;
  top: ${(props) => (props.label ? "41px" : "15px")};
  cursor: pointer;
`;

const StyledTooltip = styled.span`
  position: absolute;
  padding: 16px;
  visibility: hidden;
  background: rgba(48, 48, 48, 0.98);
  box-shadow: 0px 100px 80px rgb(0 0 0 / 7%),
    0px 41.7776px 33.4221px rgb(0 0 0 / 5%),
    0px 22.3363px 17.869px rgb(0 0 0 / 4%),
    0px 12.5216px 10.0172px rgb(0 0 0 / 4%),
    0px 6.6501px 5.32008px rgb(0 0 0 / 3%),
    0px 2.76726px 2.21381px rgb(0 0 0 / 2%);
  border-radius: 8px;
  white-space: nowrap;
  left: -140px;
  top: 31px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;

  &::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent rgba(48, 48, 48, 0.98) transparent;
  }
`;

const StyledMarkWrap = styled.div`
  position: relative;

  &:hover {
    span {
      visibility: visible;
    }
  }
`;

export const InputBox = (props: any) => {
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const [type, setType] = useState("text");
  const [focus, setFocus] = useState(false);

  const inputbox = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (props.verified) setVerified(props.verified);
    if (props.error) setError(props.error);
    if (props.type) setType(props.type);
  }, [props, error]);

  const onClickPasswordShow = (e: any) => {
    if (type === "password") setType("text");
    else if (type === "text") setType("password");
  };

  return (
    <StyledInputBoxWrap style={{ width: props.width ? props.width : "auto" }}>
      {props.label && (
        <StyledLabel>
          {props.label}
          {props.required && <StyledRequired>*</StyledRequired>}
        </StyledLabel>
      )}

      {props.type === "password" && type === "password" && (
        <StyledPasswordShow
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onMouseDown={onClickPasswordShow}
          label={props.label}
        >
          <path
            d="M9.03518 4.57333C9.35671 4.52405 9.68155 4.49953 10.0068 4.5C12.9218 4.5 15.6627 6.59917 17.2577 10C17.0137 10.5175 16.7382 11.0196 16.4327 11.5033C16.3357 11.6535 16.2847 11.8287 16.286 12.0075C16.2881 12.2076 16.3555 12.4014 16.478 12.5596C16.6006 12.7177 16.7715 12.8314 16.9647 12.8834C17.1579 12.9353 17.3628 12.9226 17.5481 12.8472C17.7334 12.7718 17.8889 12.6379 17.991 12.4658C18.4181 11.7948 18.7891 11.0896 19.1002 10.3575C19.1494 10.2431 19.1747 10.1199 19.1747 9.99542C19.1747 9.87091 19.1494 9.74771 19.1002 9.63333C17.2485 5.33417 13.7652 2.66667 10.0068 2.66667C9.57662 2.6645 9.14709 2.70132 8.72351 2.77667C8.60313 2.79713 8.48796 2.8411 8.38458 2.90608C8.28119 2.97105 8.19162 3.05575 8.12097 3.15534C8.05032 3.25493 7.99998 3.36746 7.97282 3.48651C7.94566 3.60556 7.94221 3.72879 7.96268 3.84917C7.98314 3.96954 8.02712 4.08471 8.09209 4.1881C8.15706 4.29148 8.24176 4.38105 8.34135 4.4517C8.44094 4.52235 8.55347 4.5727 8.67252 4.59986C8.79157 4.62702 8.9148 4.63046 9.03518 4.61V4.57333ZM2.40768 1.09917C2.32221 1.0137 2.22074 0.9459 2.10907 0.899645C1.9974 0.853389 1.87771 0.829582 1.75684 0.829582C1.63597 0.829582 1.51628 0.853389 1.40461 0.899645C1.29294 0.9459 1.19148 1.0137 1.10601 1.09917C0.933398 1.27178 0.836426 1.50589 0.836426 1.75C0.836426 1.99411 0.933398 2.22822 1.10601 2.40083L3.94768 5.23333C2.65112 6.4814 1.61921 7.97782 0.91351 9.63333C0.863035 9.74899 0.836982 9.87381 0.836982 10C0.836982 10.1262 0.863035 10.251 0.91351 10.3667C2.76518 14.6658 6.24851 17.3333 10.0068 17.3333C11.6542 17.322 13.2626 16.8315 14.636 15.9217L17.606 18.9008C17.6912 18.9867 17.7926 19.0549 17.9043 19.1015C18.016 19.148 18.1358 19.172 18.2568 19.172C18.3779 19.172 18.4977 19.148 18.6094 19.1015C18.7211 19.0549 18.8225 18.9867 18.9077 18.9008C18.9936 18.8156 19.0618 18.7142 19.1083 18.6025C19.1549 18.4908 19.1788 18.371 19.1788 18.25C19.1788 18.129 19.1549 18.0092 19.1083 17.8975C19.0618 17.7858 18.9936 17.6844 18.9077 17.5992L2.40768 1.09917ZM8.23768 9.52333L10.4835 11.7692C10.3286 11.8136 10.168 11.8352 10.0068 11.8333C9.52061 11.8333 9.0543 11.6402 8.71048 11.2964C8.36666 10.9525 8.17351 10.4862 8.17351 10C8.17163 9.83884 8.19325 9.67826 8.23768 9.52333ZM10.0068 15.5C7.09184 15.5 4.35101 13.4008 2.76518 10C3.35742 8.6926 4.19799 7.5127 5.24018 6.52583L6.86268 8.16667C6.48157 8.86223 6.33627 9.66262 6.44858 10.4478C6.56089 11.2329 6.92475 11.9604 7.48558 12.5213C8.0464 13.0821 8.77395 13.446 9.55909 13.5583C10.3442 13.6706 11.1446 13.5253 11.8402 13.1442L13.2977 14.5833C12.2995 15.1708 11.165 15.4868 10.0068 15.5Z"
            fill={focus ? "#0078F2" : "#F5F5F5"}
            opacity={focus ? "0.77" : "0.6"}
          />
        </StyledPasswordShow>
      )}
      {props.type === "password" && type === "text" && (
        <StyledPasswordShow
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onMouseDown={onClickPasswordShow}
          label={props.label}
        >
          <path
            d="M18.5991 7.67028C16.7475 3.37111 13.2641 0.703613 9.5058 0.703613C5.74747 0.703613 2.26413 3.37111 0.412465 7.67028C0.36199 7.78593 0.335938 7.91076 0.335938 8.03695C0.335938 8.16313 0.36199 8.28796 0.412465 8.40361C2.26413 12.7028 5.74747 15.3703 9.5058 15.3703C13.2641 15.3703 16.7475 12.7028 18.5991 8.40361C18.6496 8.28796 18.6757 8.16313 18.6757 8.03695C18.6757 7.91076 18.6496 7.78593 18.5991 7.67028ZM9.5058 13.5369C6.59996 13.5369 3.84996 11.4378 2.26413 8.03695C3.84996 4.63611 6.59996 2.53695 9.5058 2.53695C12.4116 2.53695 15.1616 4.63611 16.7475 8.03695C15.1616 11.4378 12.4116 13.5369 9.5058 13.5369ZM9.5058 4.37028C8.7806 4.37028 8.07169 4.58533 7.46871 4.98822C6.86573 5.39112 6.39576 5.96378 6.11824 6.63377C5.84072 7.30377 5.76811 8.04101 5.90958 8.75228C6.05106 9.46354 6.40028 10.1169 6.91307 10.6297C7.42587 11.1425 8.0792 11.4917 8.79047 11.6332C9.50173 11.7746 10.239 11.702 10.909 11.4245C11.579 11.147 12.1516 10.677 12.5545 10.074C12.9574 9.47106 13.1725 8.76215 13.1725 8.03695C13.1725 7.06449 12.7862 6.13186 12.0985 5.44422C11.4109 4.75659 10.4783 4.37028 9.5058 4.37028ZM9.5058 9.87028C9.1432 9.87028 8.78874 9.76276 8.48725 9.56131C8.18576 9.35986 7.95078 9.07353 7.81202 8.73853C7.67326 8.40353 7.63695 8.03491 7.70769 7.67928C7.77843 7.32365 7.95304 6.99698 8.20944 6.74058C8.46583 6.48419 8.7925 6.30958 9.14813 6.23884C9.50376 6.1681 9.87239 6.20441 10.2074 6.34317C10.5424 6.48193 10.8287 6.71691 11.0302 7.0184C11.2316 7.31989 11.3391 7.67435 11.3391 8.03695C11.3391 8.52318 11.146 8.98949 10.8022 9.33331C10.4583 9.67713 9.99203 9.87028 9.5058 9.87028Z"
            fill={focus ? "#0078F2" : "#F5F5F5"}
            opacity={focus ? "0.77" : "0.6"}
          />
        </StyledPasswordShow>
      )}
      <StyledInput
        {...props}
        onChange={(e: any) => {
          props.onChange(e.target.value);
          if (verified) setVerified(false);
        }}
        disabled={props.disabled}
        value={props.value}
        ref={inputbox}
        type={type}
        onFocus={(e: any) => setFocus(true)}
        onBlur={(e: any) => setFocus(false)}
        style={{ borderColor: error && props.value && "red" }}
      />
      {!error && props.hint && <StyledHint>{props.hint}</StyledHint>}
      {error && props.value && <StyledError>{props.error}</StyledError>}
      {error && props.value && (
        <StyledErrorMark
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          label={props.label}
        >
          <path
            d="M9.5 18.75C4.5293 18.75 0.5 14.7207 0.5 9.75C0.5 4.7793 4.5293 0.75 9.5 0.75C14.4707 0.75 18.5 4.7793 18.5 9.75C18.5 14.7207 14.4707 18.75 9.5 18.75ZM9.5 16.95C11.4096 16.95 13.2409 16.1914 14.5912 14.8412C15.9414 13.4909 16.7 11.6596 16.7 9.75C16.7 7.84044 15.9414 6.00909 14.5912 4.65883C13.2409 3.30857 11.4096 2.55 9.5 2.55C7.59044 2.55 5.75909 3.30857 4.40883 4.65883C3.05857 6.00909 2.3 7.84044 2.3 9.75C2.3 11.6596 3.05857 13.4909 4.40883 14.8412C5.75909 16.1914 7.59044 16.95 9.5 16.95ZM9.5 5.25C9.73869 5.25 9.96761 5.34482 10.1364 5.5136C10.3052 5.68239 10.4 5.9113 10.4 6.15V10.65C10.4 10.8887 10.3052 11.1176 10.1364 11.2864C9.96761 11.4552 9.73869 11.55 9.5 11.55C9.2613 11.55 9.03239 11.4552 8.8636 11.2864C8.69482 11.1176 8.6 10.8887 8.6 10.65V6.15C8.6 5.9113 8.69482 5.68239 8.8636 5.5136C9.03239 5.34482 9.2613 5.25 9.5 5.25ZM9.5 14.25C9.2613 14.25 9.03239 14.1552 8.8636 13.9864C8.69482 13.8176 8.6 13.5887 8.6 13.35C8.6 13.1113 8.69482 12.8824 8.8636 12.7136C9.03239 12.5448 9.2613 12.45 9.5 12.45C9.73869 12.45 9.96761 12.5448 10.1364 12.7136C10.3052 12.8824 10.4 13.1113 10.4 13.35C10.4 13.5887 10.3052 13.8176 10.1364 13.9864C9.96761 14.1552 9.73869 14.25 9.5 14.25Z"
            fill="#DB2929"
          />
        </StyledErrorMark>
      )}
      {verified && (
        <StyledVerified label={props.label}>
          <StyledHidden>{props.value}</StyledHidden>
          <StyledMarkWrap>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49995 5.27829e-05C7.28567 5.27829e-05 7.07138 0.0108147 6.8571 0.0321C6.64281 0.042862 6.43929 0.0749093 6.23579 0.117716C6.11788 0.128478 5.98946 0.149764 5.87156 0.182051C5.62522 0.235623 5.40018 0.299957 5.16435 0.37481C4.77859 0.503479 4.41435 0.65343 4.0609 0.835426C3.99657 0.867474 3.943 0.899761 3.88943 0.931806C3.8679 0.942568 3.83585 0.95333 3.81433 0.974615C3.69642 1.02819 3.58928 1.09252 3.48214 1.16737C3.47137 1.17814 3.45009 1.17814 3.43933 1.19942C3.32142 1.27452 3.20352 1.36014 3.08585 1.44575C2.95718 1.53137 2.82876 1.62799 2.71085 1.73514C2.60371 1.82075 2.49657 1.91738 2.38943 2.02452C2.33585 2.05657 2.28228 2.11014 2.22871 2.17447C2.13233 2.27085 2.03595 2.36723 1.95009 2.47437C1.74657 2.68866 1.57509 2.90294 1.41438 3.128C1.36081 3.21434 1.29647 3.28943 1.2429 3.37506C1.0499 3.66444 0.878663 3.96434 0.728473 4.28577C0.482143 4.78944 0.299902 5.3144 0.181996 5.87136C0.149948 6.03208 0.117662 6.20355 0.0963807 6.37503C0.0856186 6.38579 0.0750953 6.40708 0.0856186 6.4286C0.0640945 6.51422 0.0535714 6.60008 0.0535714 6.6857C0.0320473 6.77131 0.0320472 6.85717 0.0320472 6.94279C0.0107619 7.12503 0 7.31779 0 7.50003C0 7.82146 0.0215229 8.14289 0.0643335 8.45354C0.0750955 8.54992 0.0858575 8.6463 0.107143 8.74292C0.128667 8.90364 0.160715 9.06435 0.203523 9.22507C0.278621 9.56802 0.385763 9.89994 0.514188 10.2321C0.578523 10.3929 0.642856 10.5428 0.717709 10.7035L0.717949 10.7143C0.857136 11.0142 1.02861 11.3143 1.21086 11.593C1.318 11.7537 1.42514 11.9144 1.54305 12.0644C1.66095 12.2143 1.77886 12.3537 1.90728 12.4929C2.17514 12.7928 2.46452 13.0715 2.7752 13.3285C2.93591 13.4572 3.10739 13.5856 3.28939 13.7035C3.41806 13.8107 3.56801 13.8963 3.71796 13.9821C3.72872 13.9929 3.75001 13.9929 3.76077 14.0037C3.89996 14.0788 4.02863 14.1536 4.16781 14.218C4.63919 14.4538 5.1321 14.6358 5.64626 14.7644C5.8285 14.818 6.02126 14.8608 6.21402 14.8823C6.41754 14.9251 6.63183 14.9572 6.8461 14.968C7.06063 14.9892 7.28567 15 7.49998 15C7.68222 15 7.87498 14.9892 8.05722 14.968C8.2287 14.968 8.40017 14.9464 8.57141 14.9144C8.59293 14.9251 8.61422 14.9144 8.62498 14.9036C8.79646 14.8821 8.96793 14.85 9.12865 14.818C9.68589 14.7001 10.2108 14.5181 10.7142 14.2718C11.0357 14.1218 11.3355 13.9503 11.625 13.7576C11.7106 13.704 11.7857 13.6397 11.8713 13.5861C12.2783 13.2967 12.6428 12.9753 12.9747 12.611C13.0819 12.5039 13.1783 12.3968 13.2641 12.2896C13.3713 12.1717 13.4676 12.0433 13.5535 11.9146C13.6391 11.7967 13.725 11.6788 13.7998 11.5611C13.8214 11.5504 13.8214 11.5291 13.8319 11.5183C13.907 11.4112 13.9711 11.304 14.0249 11.1861C14.0464 11.1646 14.0569 11.1326 14.0677 11.111C14.0997 11.0575 14.132 11.0039 14.1641 10.9396C14.3463 10.5861 14.4963 10.2216 14.6249 9.83611C14.6998 9.6003 14.7641 9.3755 14.8177 9.12891C14.8497 9.011 14.8712 8.88258 14.882 8.76467C14.8928 8.75391 14.9035 8.73263 14.8928 8.7111C14.9248 8.58243 14.9463 8.45401 14.9463 8.31458C14.9571 8.261 14.9679 8.19667 14.9679 8.1431C14.9892 7.92857 14.9999 7.71429 14.9999 7.5C14.9999 3.36422 11.6357 0 7.49992 0L7.49995 5.27829e-05ZM6.60002 10.7143H6.58925C6.29987 10.7143 6.01073 10.5964 5.80723 10.3821L3.77152 8.23929C3.36448 7.81072 3.38576 7.13584 3.81433 6.71774C4.2429 6.32121 4.91778 6.33197 5.33588 6.76054L6.56802 8.06781L9.65361 4.63924C10.0501 4.19991 10.725 4.16786 11.1644 4.56438C11.6037 4.96091 11.6358 5.63581 11.2395 6.07515L7.38234 10.3609C7.18935 10.5857 6.89996 10.7143 6.60008 10.7143L6.60002 10.7143Z"
                fill="#16C784"
              />
            </svg>
            <StyledTooltip>Your account verified by email.</StyledTooltip>
          </StyledMarkWrap>
        </StyledVerified>
      )}
    </StyledInputBoxWrap>
  );
};

export const CustomLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`;

export const PrimaryCustomLink = styled(CustomLink)`
  color: #058ad4;

  &:hover {
    color: #2ea3e4;
  }
`;

export const SecondaryCustomLink = styled(CustomLink)`
  color: rgba(245, 245, 245, 0.8);

  &:hover {
    color: #f5f5f5;
  }
`;
