import { BsCheckLg } from 'react-icons/bs';
import { ProgressLine } from './ProgressLine';
import styles from '../../applicant.module.css'
interface Props {
  stepperLabels: Array<String>,
  step: number,
}

export default function Stepper({ stepperLabels, step }: Props) {

  const circleCheckedStyle = {
    backgroundColor: '#6499E9',
    color: '#fff',
    width: '30px',
    height: '30px',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const circleUncheckedStyle = {
    backgroundColor: '#F1EFEF',
    color: '#fff',
    width: '30px',
    height: '30px',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const labelStyle = {
    margin: 0,
    padding: 0,
    color: '#B4B4B3',
    fontWeight: '100',
  }

  const width = window.innerWidth;

  return (
    <>
      {
        width >= 700 &&
      <div style={{
        display: 'flex',
            flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
      }}>
            {stepperLabels.map((label, index) => <div key={index} style={{ display: 'flex' }}><div style={{
          display: 'flex',
          alignItems: 'center',
              justifyContent: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
            <div style={index <= step ? circleCheckedStyle : circleUncheckedStyle}>{index < step ? <BsCheckLg /> : index + 1}</div>
                <h4 style={{ ...labelStyle, textAlign: 'center' }}>{label}</h4>
              </div>
            </div>
              {
                stepperLabels.length - 1 !== index && <div className={styles.line}>
                </div>
              }
            </div>
            )}

        </div>
      }
    </>
  )
};
