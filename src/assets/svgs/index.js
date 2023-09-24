import * as React from 'react';
import Svg, {Path, Line} from 'react-native-svg';

export const MoreTabIcon = props => {
  const {color, width, height} = props;
  return (
    <Svg
      width={width || '17'}
      height={height || '5'}
      viewBox="0 0 17 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.5 0.5C1.4 0.5 0.5 1.4 0.5 2.5C0.5 3.6 1.4 4.5 2.5 4.5C3.6 4.5 4.5 3.6 4.5 2.5C4.5 1.4 3.6 0.5 2.5 0.5ZM14.5 0.5C13.4 0.5 12.5 1.4 12.5 2.5C12.5 3.6 13.4 4.5 14.5 4.5C15.6 4.5 16.5 3.6 16.5 2.5C16.5 1.4 15.6 0.5 14.5 0.5ZM8.5 0.5C7.4 0.5 6.5 1.4 6.5 2.5C6.5 3.6 7.4 4.5 8.5 4.5C9.6 4.5 10.5 3.6 10.5 2.5C10.5 1.4 9.6 0.5 8.5 0.5Z"
        fill={color || '#414649'}
      />
    </Svg>
  );
};

export const StatementIcon = props => {
  const {color, h, w} = props;
  return (
    <Svg
      width={w || '20'}
      height={h || '20'}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.50833 1.66675H13.4925C16.0667 1.66675 17.5 3.15008 17.5 5.69175V14.3001C17.5 16.8834 16.0667 18.3334 13.4925 18.3334H6.50833C3.975 18.3334 2.5 16.8834 2.5 14.3001V5.69175C2.5 3.15008 3.975 1.66675 6.50833 1.66675ZM6.73333 5.55008V5.54175H9.22417C9.58333 5.54175 9.875 5.83342 9.875 6.19092C9.875 6.55841 9.58333 6.85008 9.22417 6.85008H6.73333C6.37417 6.85008 6.08333 6.55841 6.08333 6.20008C6.08333 5.84175 6.37417 5.55008 6.73333 5.55008ZM6.73333 10.6167H13.2667C13.625 10.6167 13.9167 10.3251 13.9167 9.96675C13.9167 9.60841 13.625 9.31592 13.2667 9.31592H6.73333C6.37417 9.31592 6.08333 9.60841 6.08333 9.96675C6.08333 10.3251 6.37417 10.6167 6.73333 10.6167ZM6.73333 14.4251H13.2667C13.5992 14.3917 13.85 14.1076 13.85 13.7751C13.85 13.4334 13.5992 13.1501 13.2667 13.1167H6.73333C6.48333 13.0917 6.24167 13.2084 6.10833 13.4251C5.975 13.6334 5.975 13.9084 6.10833 14.1251C6.24167 14.3334 6.48333 14.4584 6.73333 14.4251Z"
        fill={color || 'white'}
      />
    </Svg>
  );
};

export const LimitIcon = props => {
  const {color} = props;
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3161 3.67508C14.3161 2.56675 15.2161 1.66675 16.3244 1.66675C17.4328 1.66675 18.3328 2.56675 18.3328 3.67508C18.3328 4.78342 17.4328 5.68341 16.3244 5.68341C15.2161 5.68341 14.3161 4.78342 14.3161 3.67508ZM11.1077 12.2995L13.516 9.192L13.4827 9.20866C13.616 9.02533 13.641 8.792 13.5493 8.58366C13.4585 8.37533 13.2577 8.23366 13.0418 8.217C12.816 8.192 12.5918 8.292 12.4577 8.47533L10.4418 11.0837L8.13268 9.267C7.99102 9.15866 7.82435 9.11616 7.65768 9.13366C7.49185 9.15866 7.34185 9.2495 7.24102 9.38283L4.77518 12.592L4.72435 12.667C4.58268 12.9328 4.64935 13.2745 4.89935 13.4587C5.01602 13.5337 5.14102 13.5837 5.28268 13.5837C5.47518 13.592 5.65768 13.4912 5.77435 13.3337L7.86602 10.6412L10.241 12.4253L10.316 12.4745C10.5827 12.6162 10.916 12.5503 11.1077 12.2995ZM12.8743 3.15033C12.841 3.35866 12.8243 3.567 12.8243 3.77533C12.8243 5.65033 14.341 7.16616 16.2077 7.16616C16.416 7.16616 16.616 7.142 16.8243 7.10866V13.8328C16.8243 16.6587 15.1577 18.3337 12.3243 18.3337H6.16685C3.33268 18.3337 1.66602 16.6587 1.66602 13.8328V7.667C1.66602 4.83366 3.33268 3.15033 6.16685 3.15033H12.8743Z"
        fill={color || 'white'}
      />
    </Svg>
  );
};

export const StandingIcon = props => {
  const {color} = props;
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6757 2.30726L13.6766 2.93195C15.9721 3.11186 17.4885 4.67608 17.4909 7.07487L17.5 14.0964C17.5033 16.7117 15.8602 18.3209 13.2265 18.3251L6.79324 18.3334C4.17599 18.3367 2.51235 16.6892 2.50906 14.0664L2.50001 7.12735C2.49671 4.71272 3.95961 3.15267 6.25514 2.94194L6.25432 2.31726C6.2535 1.95077 6.52501 1.67508 6.88703 1.67508C7.24905 1.67425 7.52057 1.94911 7.52139 2.31559L7.52221 2.89863L12.4095 2.89197L12.4087 2.30893C12.4078 1.94245 12.6794 1.66758 13.0414 1.66675C13.3952 1.66592 13.6749 1.94078 13.6757 2.30726ZM3.7679 7.38472L16.2247 7.36806V7.07654C16.1893 5.28577 15.2908 4.34624 13.6782 4.20631L13.679 4.84766C13.679 5.20581 13.4001 5.48983 13.0463 5.48983C12.6843 5.49067 12.412 5.20748 12.412 4.84932L12.4111 4.17466L7.52386 4.18132L7.52468 4.85515C7.52468 5.21414 7.25399 5.49733 6.89197 5.49733C6.52995 5.49816 6.25761 5.21581 6.25761 4.85682L6.25679 4.21547C4.65238 4.37623 3.76461 5.31909 3.76708 7.12568L3.7679 7.38472ZM12.6999 11.1703V11.1795C12.7082 11.5626 13.0208 11.8533 13.4001 11.845C13.7704 11.8358 14.0657 11.5185 14.0575 11.1353C14.0402 10.7689 13.7432 10.4698 13.3738 10.4707C12.9953 10.479 12.6991 10.7872 12.6999 11.1703ZM13.3795 14.9101C13.0011 14.9018 12.6958 14.5861 12.695 14.203C12.6868 13.8198 12.9904 13.5025 13.3688 13.4933H13.3771C13.7638 13.4933 14.0772 13.809 14.0772 14.2005C14.0781 14.5919 13.7654 14.9093 13.3795 14.9101ZM9.3101 11.1837C9.32655 11.5668 9.64003 11.8658 10.0185 11.8491C10.3888 11.8317 10.6841 11.5152 10.6677 11.132C10.6586 10.7572 10.3542 10.4657 9.98395 10.4665C9.60547 10.4832 9.30928 10.8005 9.3101 11.1837ZM10.0218 14.8726C9.64332 14.8893 9.33067 14.5903 9.31339 14.2071C9.31339 13.824 9.60877 13.5075 9.98724 13.49C10.3575 13.4892 10.6627 13.7807 10.671 14.1547C10.6882 14.5386 10.392 14.8551 10.0218 14.8726ZM5.92027 11.2128C5.93673 11.5959 6.2502 11.8958 6.62868 11.8783C6.99893 11.8616 7.2943 11.5443 7.27703 11.1612C7.2688 10.7863 6.96437 10.4948 6.5933 10.4957C6.21483 10.5123 5.91945 10.8297 5.92027 11.2128ZM6.63197 14.8768C6.2535 14.8943 5.94084 14.5944 5.92356 14.2113C5.92274 13.8282 6.21894 13.5108 6.59741 13.4942C6.96766 13.4933 7.27291 13.7848 7.28114 14.1597C7.29842 14.5428 7.00304 14.8601 6.63197 14.8768Z"
        fill={color || 'white'}
      />
    </Svg>
  );
};

export const ChequeIcon = props => {
  const {color} = props;
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1564 8.78246C18.0435 8.89207 17.8904 8.9547 17.7292 8.9547C17.1328 8.9547 16.6493 9.42446 16.6493 9.996C16.6493 10.5715 17.1272 11.0389 17.7179 11.0451C18.0508 11.0483 18.3337 11.2737 18.3337 11.5971V13.6053C18.3337 15.2957 16.9233 16.6666 15.1825 16.6666H12.5551C12.2835 16.6666 12.0635 16.4528 12.0635 16.189V14.4979C12.0635 14.169 11.7976 13.9107 11.4591 13.9107C11.1286 13.9107 10.8546 14.169 10.8546 14.4979V16.189C10.8546 16.4528 10.6346 16.6666 10.3638 16.6666H4.81819C3.08543 16.6666 1.66699 15.2965 1.66699 13.6053V11.5971C1.66699 11.2737 1.94987 11.0483 2.28272 11.0451C2.87428 11.0389 3.35139 10.5715 3.35139 9.996C3.35139 9.44012 2.88395 9.01734 2.27144 9.01734C2.11025 9.01734 1.95713 8.9547 1.8443 8.84509C1.73147 8.73548 1.66699 8.58673 1.66699 8.43014V6.40235C1.66699 4.71434 3.08866 3.33325 4.82624 3.33325H10.3638C10.6346 3.33325 10.8546 3.54699 10.8546 3.81084V5.81515C10.8546 6.13615 11.1286 6.40235 11.4591 6.40235C11.7976 6.40235 12.0635 6.13615 12.0635 5.81515V3.81084C12.0635 3.54699 12.2835 3.33325 12.5551 3.33325H15.1825C16.9233 3.33325 18.3337 4.70338 18.3337 6.39452V8.36751C18.3337 8.52409 18.2692 8.67285 18.1564 8.78246ZM11.4591 12.3918C11.7976 12.3918 12.0635 12.1256 12.0635 11.8046V8.67285C12.0635 8.35185 11.7976 8.08565 11.4591 8.08565C11.1286 8.08565 10.8546 8.35185 10.8546 8.67285V11.8046C10.8546 12.1256 11.1286 12.3918 11.4591 12.3918Z"
        fill={color || 'white'}
      />
    </Svg>
  );
};

export const CardMgtIcon = props => {
  const {color} = props;
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2087 4.06689H13.767C16.842 4.06689 18.342 5.70856 18.3337 9.07522V13.1336C18.3337 16.3502 16.3503 18.3336 13.1253 18.3336H6.86699C3.65866 18.3336 1.66699 16.3502 1.66699 13.1252V6.86689C1.66699 3.41689 3.20033 1.66689 6.22533 1.66689H7.54199C8.31783 1.65856 9.04199 2.01689 9.51699 2.62522L10.2503 3.60022C10.4837 3.89189 10.8337 4.06689 11.2087 4.06689ZM6.14199 12.7419H13.8587C14.2003 12.7419 14.4753 12.4586 14.4753 12.1169C14.4753 11.7669 14.2003 11.4919 13.8587 11.4919H6.14199C5.79199 11.4919 5.51699 11.7669 5.51699 12.1169C5.51699 12.4586 5.79199 12.7419 6.14199 12.7419Z"
        fill={color || 'white'}
      />
    </Svg>
  );
};

export const PeopleIcon = props => {
  const {color} = props;
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4649 6.86063C13.4649 8.8187 11.904 10.3888 9.9572 10.3888C8.01044 10.3888 6.44946 8.8187 6.44946 6.86063C6.44946 4.90181 8.01044 3.33325 9.9572 3.33325C11.904 3.33325 13.4649 4.90181 13.4649 6.86063ZM9.9572 16.6666C7.09788 16.6666 4.65641 16.2133 4.65641 14.4001C4.65641 12.5861 7.08221 12.1163 9.9572 12.1163C12.8165 12.1163 15.258 12.5696 15.258 14.3835C15.258 16.1968 12.8322 16.6666 9.9572 16.6666ZM14.9639 6.92427C14.9639 7.92244 14.6662 8.85232 14.1439 9.62534C14.0902 9.7049 14.1379 9.81222 14.2327 9.82873C14.3633 9.85124 14.4983 9.864 14.6356 9.86775C16.0048 9.90378 17.2338 9.01743 17.5733 7.68303C18.0762 5.70095 16.5995 3.9215 14.7192 3.9215C14.5147 3.9215 14.3192 3.94326 14.129 3.98229C14.1028 3.98829 14.0752 4.0003 14.0603 4.02357C14.0424 4.05209 14.0558 4.09036 14.0737 4.11513C14.6386 4.91142 14.9639 5.88257 14.9639 6.92427ZM17.2315 11.2604C18.1516 11.4413 18.7567 11.8105 19.0074 12.3471C19.2193 12.7877 19.2193 13.2988 19.0074 13.7386C18.6239 14.5709 17.3875 14.8381 16.9069 14.9071C16.8077 14.9221 16.7279 14.8358 16.7383 14.736C16.9838 12.4297 15.0311 11.3362 14.5259 11.0848C14.5043 11.0735 14.4998 11.0563 14.502 11.0457C14.5035 11.0382 14.5125 11.0262 14.5289 11.024C15.622 11.0037 16.7973 11.1538 17.2315 11.2604ZM5.36393 9.86768C5.50123 9.86393 5.63554 9.85192 5.76686 9.82865C5.86163 9.81214 5.90938 9.70482 5.85566 9.62527C5.33334 8.85225 5.03562 7.92237 5.03562 6.9242C5.03562 5.88249 5.36095 4.91134 5.9258 4.11505C5.94371 4.09029 5.95639 4.05201 5.93923 4.02349C5.9243 4.00098 5.89595 3.98822 5.87058 3.98221C5.67956 3.94319 5.48407 3.92142 5.27961 3.92142C3.39927 3.92142 1.9226 5.70087 2.42627 7.68296C2.76577 9.01736 3.99471 9.9037 5.36393 9.86768ZM5.49712 11.0453C5.49936 11.0566 5.49488 11.0731 5.47399 11.0851C4.96809 11.3365 3.01537 12.43 3.26085 14.7355C3.2713 14.8361 3.19221 14.9217 3.09297 14.9074C2.61243 14.8384 1.37603 14.5712 0.992501 13.7389C0.779843 13.2983 0.779843 12.788 0.992501 12.3474C1.24321 11.8108 1.84761 11.4416 2.76764 11.2599C3.20265 11.1541 4.37712 11.004 5.47101 11.0243C5.48742 11.0265 5.49563 11.0385 5.49712 11.0453Z"
        fill={color || 'white'}
      />
    </Svg>
  );
};

export const BroadcastIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.00185 12.0001C3.99906 13.2298 3.94419 14.907 4.70494 15.5339C5.41453 16.1187 5.91395 15.968 7.20945 16.0631C8.50587 16.1591 11.242 19.97 13.3512 18.7646C14.4393 17.9089 14.5202 16.1151 14.5202 12.0001C14.5202 7.88515 14.4393 6.09135 13.3512 5.23571C11.242 4.02938 8.50587 7.84121 7.20945 7.93717C5.91395 8.03225 5.41453 7.88157 4.70494 8.46635C3.94419 9.09328 3.99906 10.7705 4.00185 12.0001Z"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5811 8.31445C19.8924 10.6051 19.8924 13.4026 18.5811 15.6861"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export function CalendarIcon(props) {
  const {color} = props;
  return (
    <Svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2.07812 16.3281C2.07812 16.6565 2.34346 16.9219 2.67188 16.9219H16.3281C16.6565 16.9219 16.9219 16.6565 16.9219 16.3281V8.53516H2.07812V16.3281ZM16.3281 3.41406H13.2109V2.22656C13.2109 2.14492 13.1441 2.07812 13.0625 2.07812H12.0234C11.9418 2.07812 11.875 2.14492 11.875 2.22656V3.41406H7.125V2.22656C7.125 2.14492 7.0582 2.07812 6.97656 2.07812H5.9375C5.85586 2.07812 5.78906 2.14492 5.78906 2.22656V3.41406H2.67188C2.34346 3.41406 2.07812 3.67939 2.07812 4.00781V7.27344H16.9219V4.00781C16.9219 3.67939 16.6565 3.41406 16.3281 3.41406Z"
        fill={color || 'white'}
      />
    </Svg>
  );
}

export function DeleteIcon(props) {
  const {color} = props;
  return (
    <Svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16.3333 4.49992H12.6667V3.58325C12.6667 2.85391 12.3769 2.15443 11.8612 1.63871C11.3455 1.12298 10.646 0.833252 9.91667 0.833252H8.08333C7.35399 0.833252 6.65451 1.12298 6.13879 1.63871C5.62306 2.15443 5.33333 2.85391 5.33333 3.58325V4.49992H1.66667C1.42355 4.49992 1.19039 4.5965 1.01849 4.7684C0.846577 4.94031 0.75 5.17347 0.75 5.41659C0.75 5.6597 0.846577 5.89286 1.01849 6.06477C1.19039 6.23667 1.42355 6.33325 1.66667 6.33325H2.58333V16.4166C2.58333 17.1459 2.87306 17.8454 3.38879 18.3611C3.90451 18.8769 4.60399 19.1666 5.33333 19.1666H12.6667C13.396 19.1666 14.0955 18.8769 14.6112 18.3611C15.1269 17.8454 15.4167 17.1459 15.4167 16.4166V6.33325H16.3333C16.5764 6.33325 16.8096 6.23667 16.9815 6.06477C17.1534 5.89286 17.25 5.6597 17.25 5.41659C17.25 5.17347 17.1534 4.94031 16.9815 4.7684C16.8096 4.5965 16.5764 4.49992 16.3333 4.49992ZM7.16667 3.58325C7.16667 3.34014 7.26324 3.10698 7.43515 2.93507C7.60706 2.76316 7.84022 2.66659 8.08333 2.66659H9.91667C10.1598 2.66659 10.3929 2.76316 10.5648 2.93507C10.7368 3.10698 10.8333 3.34014 10.8333 3.58325V4.49992H7.16667V3.58325ZM13.5833 16.4166C13.5833 16.6597 13.4868 16.8929 13.3148 17.0648C13.1429 17.2367 12.9098 17.3333 12.6667 17.3333H5.33333C5.09022 17.3333 4.85706 17.2367 4.68515 17.0648C4.51324 16.8929 4.41667 16.6597 4.41667 16.4166V6.33325H13.5833V16.4166Z"
        fill={color || '#FF6767'}
      />
    </Svg>
  );
}
