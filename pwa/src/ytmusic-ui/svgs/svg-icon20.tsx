export default function Icon20({ cid }: { cid?: string }) {
  return (
    <svg className="hidden 2xl:box-content 2xl:w-4 2xl:h-4 2xl:block 2xl:overflow-hidden 2xl:pointer-events-none" aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor" data-cid={cid}>
      <path d="M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2ZM8 6h8a1 1 0 110 2H9v3h5a1 1 0 010 2H9v3h7a1 1 0 010 2H8a1 1 0 01-1-1V7a1 1 0 011-1Z" />
    </svg>
  );
}
