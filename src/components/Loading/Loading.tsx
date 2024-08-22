export function Loading({ width, height }: { width: string; height: string }) {
  return (
    <div
      style={{ width: `${width}`, height: `${height}` }}
      className="animate-spin w-12 h-12 inline-block box-border  rounded-[50%] border-b-transparent border-[5px] border-solid border-white"
    ></div>
  );
}

export default Loading;
