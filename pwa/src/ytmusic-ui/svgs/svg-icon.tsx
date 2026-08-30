export default function Icon({ cid }: { cid?: string }) {
  return (
    <svg className="box-content w-auto h-6 block overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor" data-cid={cid}>
      <path d="M20 5H4a1 1 0 000 2h16a1 1 0 100-2Zm0 6H4a1 1 0 000 2h16a1 1 0 000-2Zm0 6H4a1 1 0 000 2h16a1 1 0 000-2Z" />
    </svg>
  );
}
