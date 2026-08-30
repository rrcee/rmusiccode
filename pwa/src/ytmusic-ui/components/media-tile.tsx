import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  imgSrc: string;
  ariaLabel: string;
  label: string;
  href: string;
  label2: string;
  ariaLabel2: string;
  label3: string;
  href2: string;
  label4: string;
  text: string;
  label5: string;
  href3: string;
  label6: string;
};
/** A media tile. */
export default function MediaTile({ d, cids, styles, onClick }: { d: MediaTileData; cids: string[]; styles: MediaTileStyles, onClick?: () => void }) {
  return (
    <ytmusic-responsive-list-item-renderer onClick={onClick} data-cid={cids[0]} class={cn("hidden 2xl:box-content 2xl:flex 2xl:relative 2xl:px-2 2xl:items-center 2xl:align-top cursor-pointer", styles.className)} role="listitem">
      {"  "}
      <div data-cid={cids[1]} className="hidden 2xl:box-content 2xl:w-12 2xl:h-full 2xl:block 2xl:relative 2xl:mr-4 2xl:rounded-xs 2xl:shrink-0 2xl:overflow-hidden">
        <ytmusic-thumbnail-renderer data-cid={cids[2]} class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:rounded-sm 2xl:overflow-hidden">
          <yt-img-shadow data-cid={cids[3]} class="hidden 2xl:box-content 2xl:flex 2xl:items-center 2xl:shrink-0" id="image">
            <img data-cid={cids[4]} className="hidden 2xl:box-content 2xl:w-full 2xl:h-12 2xl:block 2xl:max-w-full 2xl:overflow-clip 2xl:object-contain" alt="" id="img" src={d.imgSrc} width="56" />
          </yt-img-shadow>
          {" "}
        </ytmusic-thumbnail-renderer>
        {"     "}
        <ytmusic-item-thumbnail-overlay-renderer data-cid={cids[5]} class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:opacity-[1e-06]">
          <ytmusic-background-overlay-renderer data-cid={cids[6]} class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0" id="background" />
          {" "}
          <div data-cid={cids[7]} className="hidden 2xl:box-content 2xl:w-12 2xl:h-full 2xl:flex 2xl:absolute 2xl:top-0 2xl:left-0 2xl:justify-center 2xl:items-center" id="content">
            <ytmusic-play-button-renderer data-cid={cids[8]} class="hidden 2xl:box-content 2xl:block 2xl:relative" aria-disabled="false" aria-label={d.ariaLabel} id="play-button" role="button">
              <div data-cid={cids[9]} className="hidden 2xl:box-content 2xl:w-8 2xl:h-8 2xl:flex 2xl:rounded-[50%] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden 2xl:cursor-pointer">
                {" "}
                <yt-icon data-cid={cids[10]} class="hidden 2xl:box-content 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle">
                  <span data-cid={cids[11]} className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center">
                    <div data-cid={cids[12]} className="hidden 2xl:box-content 2xl:block">
                      <svg data-cid={cids[13]} className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:overflow-hidden 2xl:pointer-events-none" aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor">
                        <path d="M5 4.623V19.38a1.5 1.5 0 002.26 1.29L22 12 7.26 3.33A1.5 1.5 0 005 4.623Z" />
                      </svg>
                    </div>
                  </span>
                </yt-icon>
                {"  "}
              </div>
              {" "}
            </ytmusic-play-button-renderer>
            {"  "}
          </div>
          {"  "}
        </ytmusic-item-thumbnail-overlay-renderer>
        {"   "}
      </div>
      {"  "}
      <div data-cid={cids[14]} className={cn("hidden 2xl:box-content 2xl:flex 2xl:flex-wrap 2xl:items-center 2xl:flex-1 2xl:overflow-hidden", styles.className2)}>
        <div data-cid={cids[15]} className={cn("hidden 2xl:box-content 2xl:flex 2xl:mb-[0.1875rem] 2xl:justify-between 2xl:grow-[6] 2xl:basis-full 2xl:overflow-hidden", styles.className3)}>
          <yt-formatted-string data-cid={cids[16]} class={cn("hidden 2xl:box-content 2xl:flex 2xl:overflow-hidden 2xl:text-base 2xl:font-medium 2xl:leading-[1.1875rem] 2xl:whitespace-pre", styles.className4)} title={d.label}>
            <a data-cid={cids[17]} className={cn("hidden 2xl:box-content 2xl:block 2xl:-mr-[0.1rem] 2xl:pr-[0.1rem] 2xl:overflow-hidden 2xl:cursor-pointer", styles.className5)} href={d.href}>
              {d.label2}
            </a>
          </yt-formatted-string>
          {"  "}
        </div>
        {" "}
        <div data-cid={cids[18]} className="hidden 2xl:box-content 2xl:flex 2xl:items-center" id="stacked-layout-badges">
          <ytmusic-inline-badge-renderer data-cid={cids[19]} class="hidden 2xl:box-content 2xl:w-4 2xl:h-4 2xl:block">
            <yt-icon data-cid={cids[20]} class="hidden 2xl:box-content 2xl:block 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle 2xl:text-color-003" aria-label="Explicit" title="Explicit">
              <span data-cid={cids[21]} className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center">
                <div data-cid={cids[22]} className="hidden 2xl:box-content 2xl:block">
                  <svg data-cid={cids[23]} className="hidden 2xl:box-content 2xl:w-4 2xl:h-4 2xl:block 2xl:overflow-hidden 2xl:pointer-events-none" aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor">
                    <path d="M20 2H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2ZM8 6h8a1 1 0 110 2H9v3h5a1 1 0 010 2H9v3h7a1 1 0 010 2H8a1 1 0 01-1-1V7a1 1 0 011-1Z" />
                  </svg>
                </div>
              </span>
            </yt-icon>
            {" "}
          </ytmusic-inline-badge-renderer>
          {"     "}
        </div>
        {" "}
        <div data-cid={cids[24]} className={cn("hidden 2xl:box-content 2xl:flex 2xl:z-1 2xl:items-center 2xl:grow-[9] 2xl:basis-[1px] 2xl:overflow-hidden", styles.className6)}>
          <div data-cid={cids[25]} className={cn("hidden 2xl:box-content 2xl:flex 2xl:min-w-0 2xl:max-w-[max-content] 2xl:ml-1 2xl:items-center 2xl:flex-1 2xl:text-color-003 2xl:text-base 2xl:leading-[1.1875rem]", styles.className7)}>
            <yt-formatted-string data-cid={cids[26]} class={cn("hidden 2xl:box-content 2xl:flex 2xl:min-w-0 2xl:flex-1 2xl:overflow-hidden 2xl:whitespace-pre", styles.className8)} aria-label={d.ariaLabel2} title={d.label3}>
              <a data-cid={cids[27]} className="hidden 2xl:box-content 2xl:block 2xl:-mr-[0.1rem] 2xl:pr-[0.1rem] 2xl:cursor-pointer" href={d.href2}>
                {d.label4}
              </a>
              <span data-cid={cids[28]} className="hidden 2xl:box-content 2xl:block">
                {" • "}
              </span>
              <span data-cid={cids[29]} className="hidden 2xl:box-content 2xl:block 2xl:overflow-hidden">
                {d.text}
              </span>
            </yt-formatted-string>
            {" "}
          </div>
          {"  "}
          <div data-cid={cids[30]} className={cn("hidden 2xl:box-content 2xl:flex 2xl:min-w-0 2xl:max-w-[max-content] 2xl:ml-1 2xl:items-center 2xl:flex-1 2xl:text-color-003 2xl:text-base 2xl:leading-[1.1875rem] before:content-['•'] before:block before:w-[0.3125rem] before:h-[1.2rem] before:mr-1 before:text-color-003 before:text-base before:leading-[1.1875rem] max-lg:before:hidden", styles.className9)}>
            <yt-formatted-string data-cid={cids[31]} class={cn("hidden 2xl:box-content 2xl:flex 2xl:min-w-0 2xl:flex-1 2xl:overflow-hidden 2xl:whitespace-pre", styles.className10)} title={d.label5}>
              <a data-cid={cids[32]} className={cn("hidden 2xl:box-content 2xl:block 2xl:-mr-[0.1rem] 2xl:pr-[0.1rem] 2xl:overflow-hidden 2xl:cursor-pointer", styles.className11)} href={d.href3}>
                {d.label6}
              </a>
            </yt-formatted-string>
            {" "}
          </div>
          {"  "}
        </div>
        {"  "}
      </div>
      {"   "}
      <ytmusic-menu-renderer data-cid={cids[33]} class="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:flex 2xl:ml-4 2xl:items-center 2xl:basis-0 2xl:overflow-hidden" aria-label="Action menu">
        <div data-cid={cids[34]} className="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:flex 2xl:overflow-hidden" id="top-level-buttons">
          {"  "}
          <ytmusic-like-button-renderer data-cid={cids[35]} class="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:block 2xl:mr-2 2xl:overflow-hidden">
            <yt-button-shape data-cid={cids[36]} class="hidden 2xl:box-content 2xl:inline-block 2xl:opacity-[1e-06] 2xl:grow 2xl:basis-[1e-09px]" id="button-shape-like">
              {" "}
              <button data-cid={cids[37]} className="hidden 2xl:w-9 2xl:h-9 2xl:flex 2xl:relative 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:shrink-0 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" aria-label="Like" aria-pressed="false">
                <div data-cid={cids[38]} className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" aria-hidden="true">
                  <span data-cid={cids[39]} className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle">
                    <span data-cid={cids[40]} className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center">
                      <div data-cid={cids[41]} className="hidden 2xl:box-content 2xl:block">
                        <svg data-cid={cids[42]} className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:overflow-hidden 2xl:pointer-events-none" aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor">
                          <path d="M9.221 1.795a1 1 0 011.109-.656l1.04.173a4 4 0 013.252 4.784L14 9h4.061a3.664 3.664 0 013.576 2.868A3.68 3.68 0 0121 14.85l.02.087A3.815 3.815 0 0120 18.5v.043l-.01.227a2.82 2.82 0 01-.135.663l-.106.282A3.754 3.754 0 0116.295 22h-3.606l-.392-.007a12.002 12.002 0 01-5.223-1.388l-.343-.189-.27-.154a2.005 2.005 0 00-.863-.26l-.13-.004H3.5a1.5 1.5 0 01-1.5-1.5V12.5A1.5 1.5 0 013.5 11h1.79l.157-.013a1 1 0 00.724-.512l.063-.145 2.987-8.535Zm-1.1 9.196A3 3 0 015.29 13H4v4.998h1.468a4 4 0 011.986.528l.27.155.285.157A10 10 0 0012.69 20h3.606c.754 0 1.424-.483 1.663-1.2l.03-.126a.819.819 0 00.012-.131v-.872l.587-.586c.388-.388.577-.927.523-1.465l-.038-.23-.02-.087-.21-.9.55-.744A1.663 1.663 0 0018.061 11H14a2.002 2.002 0 01-1.956-2.418l.623-2.904a2 2 0 00-1.626-2.392l-.21-.035-2.71 7.741Z" />
                        </svg>
                      </div>
                    </span>
                  </span>
                </div>
                <yt-touch-feedback-shape data-cid={cids[43]} class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" aria-hidden="true" />
              </button>
            </yt-button-shape>
            {" "}
            <yt-button-shape data-cid={cids[44]} class="hidden 2xl:box-content 2xl:inline-block 2xl:opacity-[1e-06] 2xl:mr-2 2xl:grow 2xl:basis-[1e-09px]" id="button-shape-dislike">
              {" "}
              <button data-cid={cids[45]} className="hidden 2xl:w-9 2xl:h-9 2xl:flex 2xl:relative 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:shrink-0 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" aria-label="Dislike" aria-pressed="false">
                <div data-cid={cids[46]} className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" aria-hidden="true">
                  <span data-cid={cids[47]} className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle">
                    <span data-cid={cids[48]} className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center">
                      <div data-cid={cids[49]} className="hidden 2xl:box-content 2xl:block">
                        <svg data-cid={cids[50]} className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:overflow-hidden 2xl:pointer-events-none" aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor">
                          <path d="m11.31 2 .392.007c1.824.06 3.61.534 5.223 1.388l.343.189.27.154c.264.152.56.24.863.26l.13.004H20.5a1.5 1.5 0 011.5 1.5V11.5a1.5 1.5 0 01-1.5 1.5h-1.79l-.158.013a1 1 0 00-.723.512l-.064.145-2.987 8.535a1 1 0 01-1.109.656l-1.04-.174a4 4 0 01-3.251-4.783L10 15H5.938a3.664 3.664 0 01-3.576-2.868A3.682 3.682 0 013 9.15l-.02-.088A3.816 3.816 0 014 5.5v-.043l.008-.227a2.86 2.86 0 01.136-.664l.107-.28A3.754 3.754 0 017.705 2h3.605ZM7.705 4c-.755 0-1.425.483-1.663 1.2l-.032.126a.818.818 0 00-.01.131v.872l-.587.586a1.816 1.816 0 00-.524 1.465l.038.23.02.087.21.9-.55.744a1.686 1.686 0 00-.321 1.18l.029.177c.17.76.844 1.302 1.623 1.302H10a2.002 2.002 0 011.956 2.419l-.623 2.904-.034.208a2.002 2.002 0 001.454 2.139l.206.045.21.035 2.708-7.741A3.001 3.001 0 0118.71 11H20V6.002h-1.47c-.696 0-1.38-.183-1.985-.528l-.27-.155-.285-.157A10.002 10.002 0 0011.31 4H7.705Z" />
                        </svg>
                      </div>
                    </span>
                  </span>
                </div>
                <yt-touch-feedback-shape data-cid={cids[51]} class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" aria-hidden="true" />
              </button>
            </yt-button-shape>
            {" "}
          </ytmusic-like-button-renderer>
          {"     "}
        </div>
        {"  "}
        <yt-button-shape data-cid={cids[52]} class="hidden 2xl:box-content 2xl:flex 2xl:opacity-[1e-06] 2xl:shrink-0" id="button-shape">
          <button data-cid={cids[53]} className="hidden 2xl:basis-full 2xl:shrink-0 2xl:h-9 2xl:flex 2xl:relative 2xl:min-w-0 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" aria-label="Action menu">
            <div data-cid={cids[54]} className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" aria-hidden="true">
              <span data-cid={cids[55]} className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle">
                <span data-cid={cids[56]} className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center">
                  <div data-cid={cids[57]} className="hidden 2xl:box-content 2xl:block">
                    <svg data-cid={cids[58]} className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:overflow-hidden 2xl:pointer-events-none" aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor">
                      <path d="M12 4a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Z" />
                    </svg>
                  </div>
                </span>
              </span>
            </div>
            <yt-touch-feedback-shape data-cid={cids[59]} class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" aria-hidden="true" />
          </button>
        </yt-button-shape>
        {"  "}
      </ytmusic-menu-renderer>
      {"  "}
    </ytmusic-responsive-list-item-renderer>
  );
}
