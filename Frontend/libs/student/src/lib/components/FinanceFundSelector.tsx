import React, {useState} from "react";
import { FinanceFund } from "@egst.frontend/shared";

interface Props{
    value?: string;
    label: string;
    state: string | number ;
    className?: string;
    inputValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// export const States = [
//     { name: 'Single', abbrev: 'S' },
//     { name: 'Married', abbrev:'M'},
//     { name: 'Divorced', abbrev: 'D'},
//     { name: 'Remarried', abbrev: 'R'},
//     { name: 'Widowed', abbrev: 'W'}
//   ]
const Selector = (props: Props) => {
     const {className, inputValue, value, label, state} = props
    const [data, setData] = useState<any>({});
    


    return(
      <div>
        <span>{label}</span>
            <select
              className={className}
              value={value}
              onChange={inputValue}

                        // className="userDataInputBox half-size-input"
                        // style={{ width: '50%' }}
                        // value={userValues.state}
                        // onChange={setUserState}
                      >
                        {FinanceFund?.map((state) => {
                          return (
                            <option value={state.name}>
                              ({state.abbrev}) {state.name}
                            </option>
                          );
                        })}
            </select>
        </div>
    );
};

export default Selector;

