export default function Icon4({ cid }: { cid?: string }) {
  return (
    <svg className="box-content w-6 h-6 block overflow-hidden pointer-events-none" aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor" data-cid={cid}>
      <path d="M17.293 5.293 12 10.586 6.707 5.293a1 1 0 10-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 001.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 10-1.414-1.414Z" />
    </svg>
  );
}
