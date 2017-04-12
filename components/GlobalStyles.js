export default () => (
  <div>
    <style jsx global>
      {
        `
        *,
        *::after,
        *::before {
        box-sizing: border-box;
        }
        body{
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        background: #fff;
        font-family: -apple-system,
              system-ui,
              BlinkMacSystemFont,
              "Segoe UI", 
              Roboto, 
              Oxygen-Sans, 
              Ubuntu,  
              Cantarell,
              "Fira Sans",
              "Droid Sans",
              "Helvetica Neue", 
              sans-serif;
        font-weight: 400;
        color: #444;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        }
                
        .rrui__select__options--left-aligned,rrui__expandable--left-aligned{left:0}.rrui__select__options--right-aligned,rrui__expandable--right-aligned{right:0}.rrui__select__option,.rrui__select__selected{padding:0;white-space:nowrap;outline:0;appearance:none;border:none;background:0 0;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:inherit;font-style:inherit}.rrui__select{position:relative;display:inline-block}.rrui__expandable{opacity:0;pointer-events:none;transform:scaleY(0);-webkit-transform:scaleY(0);transform-origin:50% top 0;-webkit-transform-origin:50% top 0;transition:all 150ms cubic-bezier(.76,.04,.46,.75) 0s;-webkit-transition:all 150ms cubic-bezier(.76,.04,.46,.75) 0s;background-clip:padding-box;-webkit-background-clip:padding-box}.rrui__expandable--expanded{opacity:1;pointer-events:auto;transform:scaleY(1);-webkit-transform:scaleY(1);transform-origin:50% top 0;-webkit-transform-origin:50% top 0;transition:all 150ms cubic-bezier(.23,1,.32,1) 0s;-webkit-transition:all 150ms cubic-bezier(.23,1,.32,1) 0s}.rrui__expandable--overlay{position:absolute;z-index:1}.rrui__expandable__content{opacity:0;transition:opacity 150ms ease-out;-webkit-transition:opacity 150ms ease-out}.rrui__expandable__content--expanded{opacity:1}.rrui__shadow{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.rrui__select__options{margin:0;padding:0;overflow-y:auto;background-color:#fff}.rrui__select__options--simple-left-aligned{left:calc(.3rem * 4 * -1)}.rrui__select__options--simple-right-aligned{right:calc(.3rem * 4 * -1)}.rrui__select__options--downward{margin-bottom:1em}.rrui__select__options--upward{bottom:100%;margin-top:1em;transform-origin:50% bottom 0;-webkit-transform-origin:50% bottom 0}.rrui__select__options-list-item:first-child{padding-top:calc(2 * .3rem)}.rrui__select__options-list-item:last-child{padding-bottom:calc(2 * .3rem)}.rrui__select__option{width:100%;padding-left:calc(.3rem * 4);padding-right:calc(.3rem * 4);padding-top:calc(.3rem * 1);padding-bottom:calc(.3rem * 1);box-sizing:border-box;text-align:left;white-space:nowrap}.rrui__select__option--disabled,.rrui__select__selected--disabled{cursor:default}.rrui__select__option:active{background-color:#3678D1;color:#fff}.rrui__select__separator{height:1pt;background-color:#B8BDC4}.rrui__select__separator-option{padding-top:calc(.3rem * 2);padding-bottom:calc(.3rem * 2)}.rrui__select__option--focused{background-color:#ECF1F6}.rrui__select__option-icon{margin-right:.5em}.rrui__select__selected{border-bottom:1px solid #C5D2E0;text-align:left;transition:background-color 30ms ease-out,color 30ms ease-out;-webkit-transition:background-color 30ms ease-out,color 30ms ease-out}.rrui__select__selected:focus{border-bottom-color:#03B2CB}.rrui__select__selected--expanded,.rrui__select__selected:active{color:#3678D1}.rrui__select--expanded .rrui__select__selected--nothing,.rrui__select__selected--nothing{color:#888C91}.rrui__select--expanded .rrui__select__selected--autocomplete{color:#000}.rrui__select__option,.rrui__select__selected{color:inherit}.rrui__select__arrow{width:0;height:0;margin-left:.35em;margin-top:.1em;margin-bottom:.1em;opacity:.7;transition:opacity .1s ease-out;-webkit-transition:opacity .1s ease-out;border-width:.35em .2em 0;border-style:solid;border-left-color:transparent;border-right-color:transparent;color:#B8BDC4}.rrui__select__arrow--expanded{opacity:.3}.rrui__select__selected:focus+.rrui__input-label{color:#03B2CB}.react-phone-number-input__country input,.react-phone-number-input__phone{outline:0;appearance:none}.react-phone-number-input__country{margin-right:calc(.3rem * 1.5)}.rrui__input{height:calc(.3rem * 6)}.react-phone-number-input__phone,.rrui__select__selected--autocomplete{width:calc(.3rem * 60);padding:0;border:none;border-bottom:1px solid #C5D2E0;transition:border .1s;-webkit-transition:border .1s}.react-phone-number-input__phone:focus{border-bottom-color:#0093C4}.react-phone-number-input .rrui__select__arrow{margin-top:.3rem;margin-left:.3rem}.react-phone-number-input__icon{display:inline-block;vertical-align:top;width:1.24em;height:.93em;border:1px solid #bfbfbf}.react-phone-number-input__icon--international{width:calc(.93em + 2px);height:calc(.93em + 2px);padding-left:.155em;padding-right:.155em;border:none}#nprogress{pointer-events:none}#nprogress .bar{background:#F44336;position:fixed;z-index:1031;top:0;left:0;width:100%;height:4px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px #F44336,0 0 5px #F44336;opacity:1;transform:rotate(3deg) translate(0,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:#F44336;border-left-color:#F44336;border-radius:50%;animation:nprogress-spinner .4s linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
        .rrui__input{
          font-size: 18px;
        }
        .react-code-input input[type=tel] {
          box-shadow: none !important;
        }
        input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        
        input[type="number"] {
            -moz-appearance: textfield;
        }
        @media(max-width: 580px) {
          .react-phone-number-input__phone, .rrui__select__selected--autocomplete {
            width: 250px;
          }
        }
        @media(max-width: 330px) {
          .react-phone-number-input__phone, .rrui__select__selected--autocomplete {
            width: 240px;
          }
        }
    `
      }
    </style>
  </div>
)
