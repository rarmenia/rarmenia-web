interface Props {
  src: string;
  params?: { [key: string]: any }
  children: React.ReactNode
}

const VideoKnockout = (props: Props) => {

  const params: string | undefined = props.params ? '?' + Object.entries(props.params).reduce((prev: string, [key, value]) => {
    const param = `${key}=${JSON.stringify(value)}`;
    return prev + (prev ? '&' : '') + param;
  }, '') : undefined;

  const render = () => (
    <div className="min-h-full min-w-full relative overflow-hidden">
      <div className="h-full w-full overflow-hidden absolute top-0 left-0">
        <iframe src={`${props.src}${params ?? ''}`} className="w-full aspect-video min-h-full"></iframe>
      </div>
      <div className="absolute inset-0 bg-white opacity-30"></div>
      <div className="absolute inset-0 bg-black opacity-95 grid place-items-center mix-blend-multiply text-white text-9xl font-black">
        <div className="border-[2px] border-blue-300 border-opacity-20 rounded-md">
          {props.children}
        </div>
      </div>
      <div className="absolute top-[-4px] left-[-4px] h-full w-full bg-transparent opacity-10 grid place-items-center mix-blend-screen text-blue-700 text-9xl font-black">
        {props.children}
      </div>
      <div className="absolute top-[4px] left-[4px] h-full w-full bg-transparent opacity-10 grid place-items-center mix-blend-screen text-red-700 text-9xl font-black">
        {props.children}
      </div>
    </div>
  );

  return render();

}

export default VideoKnockout;
