export const Logo = () => (
  <div>
    <span>vitorcapretz.com</span>
    <style jsx>{`
      div {
        position: relative;
      }

      span {
        font-weight: bold;
        font-size: 18px;
        height: 30px;
        padding: 10px;

        animation: animate-main 1s ease-in-out 2s forwards;
      }

      span:before {
        content: "v";
        position: absolute;
        color: black;
      }

      span:after {
        content: "capretz.com";

        position: absolute;
        right: 10px;

        color: black;

        animation: animate-after 1s ease-in-out 3s forwards;
      }

      @keyframes animate-main {
        0% {
          color: black;
        }

        100% {
          color: transparent;
        }
      }

      @keyframes animate-after {
        0% {
          transform: translateX(0);
        }

        100% {
          transform: translateX(-27%);
        }
      }
    `}</style>
  </div>
);
