export function Divider() {
  return (
    <div className="w-full items-center flex flex-nowrap gap-2 h-8 justify-center overflow-hidden p-0 relative">
      <div className="bg-stone-200 flex-none h-[1px] left-0 min-w-full overflow-hidden absolute right-0 top-[calc(50%_-_1px/2)] z-[1]"></div>
      <div className="items-center flex flex-[1_0_0px] flex-row flex-nowrap gap-[2px] h-7 justify-center overflow-visible w-[1px] max-w-[73.5rem] p-0 relative">
        <div className="items-center flex flex-none flex-row flex-nowrap gap-[10px] h-min justify-center overflow-hidden p-0 relative w-min z-[1]">
            <div data-framer-component-type="SVG" data-framer-name="Plus" style={{
              imageRendering: 'pixelated',
              flexShrink: 0,
              backgroundSize: '100% 100%',
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 12 5 L 12 19 M 5 12 L 19 12" fill="transparent" stroke-width="1.5" stroke="rgba(20, 20, 20, 0.15)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>')`
            }} className="bg-main flex-none h-6 relative w-6" aria-hidden="true"></div>
        </div>

        <div className="bg-stone-200 flex-[1_0_0px] h-[1px] overflow-hidden relative w-[1px]"></div>

        <div className="items-center flex flex-none flex-row flex-nowrap gap-[10px] h-min justify-center overflow-hidden p-0 relative w-min z-[1]">
            <div data-framer-component-type="SVG" data-framer-name="Plus" style={{
              imageRendering: 'pixelated',
              flexShrink: 0,
              backgroundSize: '100% 100%',
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M 12 5 L 12 19 M 5 12 L 19 12" fill="transparent" stroke-width="1.5" stroke="rgba(20, 20, 20, 0.15)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>')`
            }} className="bg-main flex-none h-6 relative w-6" aria-hidden="true"></div>
        </div>
      </div>
    </div>
  );
}