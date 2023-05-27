interface Props {
  data?: [string] | [string, string];
  hideLoading?: boolean
}

const AbbrOrText = (props: Props) => {

  if (!props.data) return <></>;

  const content = props.data[0];
  const full = props.data[1] ?? undefined;

  return (
    <>
      {props.data && (
        <>
          {full ? <abbr title={full}>{content}</abbr> : <span>{content}</span>}
        </>
      )}
    </>
  );

}

export default AbbrOrText;