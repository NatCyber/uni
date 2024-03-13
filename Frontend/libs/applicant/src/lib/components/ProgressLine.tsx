
interface ProgressLine { }

export const ProgressLine = () => {
  return (
    <div className={'progress-line-container'} style={{ display: 'flex' }}>
      <div className={'vertical'} style={{ width: '200px' }}></div>
      {/* <div className={styles['horizontal']}></div> */}
    </div>
  );
};