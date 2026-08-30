import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile3Data = {
  href: string;
  label: string;
  imgSrc: string;
  ariaLabel: string;
  href2: string;
  label2: string;
  text: string;
};
/** A media tile. */
export default function MediaTile3({ d, cids, styles }: { d: MediaTile3Data; cids: string[]; styles: MediaTile3Styles }) {
  return (
    <ytmusic-two-row-item-renderer data-cid={cids[0]} class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[18.825rem] 2xl:block 2xl:align-top" role="listitem">
      <a data-cid={cids[1]} className="hidden 2xl:box-content 2xl:block 2xl:relative 2xl:pt-[224.7px] 2xl:overflow-hidden 2xl:cursor-pointer" href={d.href} title={d.label}>
        {"  "}
        <ytmusic-thumbnail-renderer data-cid={cids[2]} class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:top-0 2xl:rounded-lg 2xl:overflow-hidden">
          <yt-img-shadow data-cid={cids[3]} class="hidden 2xl:box-content 2xl:flex 2xl:items-center 2xl:shrink-0" id="image">
            <img data-cid={cids[4]} className="hidden 2xl:box-content 2xl:w-full 2xl:h-[14.0625rem] 2xl:block 2xl:max-w-full 2xl:overflow-clip 2xl:object-cover" alt="" id="img" src={d.imgSrc} width="226" />
          </yt-img-shadow>
          {" "}
        </ytmusic-thumbnail-renderer>
        {"  "}
        <tp-yt-paper-ripple data-cid={cids[5]} class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:overflow-hidden 2xl:pointer-events-none" id="ripple">
          {" "}
          <div data-cid={cids[6]} className="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:overflow-hidden 2xl:pointer-events-none" id="waves" />
          {" "}
        </tp-yt-paper-ripple>
        {"  "}
        <ytmusic-item-thumbnail-overlay-renderer data-cid={cids[7]} class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:left-0">
          <ytmusic-background-overlay-renderer data-cid={cids[8]} class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:opacity-[1e-06]" id="background" />
          {" "}
          <div data-cid={cids[9]} className="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0" id="content">
            <ytmusic-play-button-renderer data-cid={cids[10]} class="hidden 2xl:box-content 2xl:w-10 2xl:h-10 2xl:block 2xl:absolute 2xl:right-3 2xl:bottom-3 2xl:opacity-[1e-06]" aria-disabled="false" aria-label={d.ariaLabel} id="play-button" role="button">
              <div data-cid={cids[11]} className="hidden 2xl:box-content 2xl:w-10 2xl:h-10 2xl:flex 2xl:rounded-[50%] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden 2xl:bg-color-004">
                {" "}
                <yt-icon data-cid={cids[12]} class="hidden 2xl:box-content 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle">
                  <span data-cid={cids[13]} className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center">
                    <div data-cid={cids[14]} className="hidden 2xl:box-content 2xl:block">
                      <svg data-cid={cids[15]} className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:overflow-hidden 2xl:pointer-events-none" aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor">
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
          {" "}
          <ytmusic-menu-renderer data-cid={cids[16]} class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:flex 2xl:absolute 2xl:top-2 2xl:right-1 2xl:opacity-[1e-06] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden" aria-haspopup="menu" aria-label="Action menu">
            {"  "}
            <yt-button-shape data-cid={cids[17]} class="hidden 2xl:box-content 2xl:flex 2xl:shrink-0" id="button-shape">
              <div data-cid={cids[18]} className="hidden 2xl:basis-full 2xl:shrink-0 2xl:h-9 2xl:flex 2xl:relative 2xl:min-w-0 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center" aria-label="Action menu">
                <div data-cid={cids[19]} className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" aria-hidden="true">
                  <span data-cid={cids[20]} className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle">
                    <span data-cid={cids[21]} className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center">
                      <div data-cid={cids[22]} className="hidden 2xl:box-content 2xl:block">
                        <svg data-cid={cids[23]} className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:overflow-hidden 2xl:pointer-events-none" aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor">
                          <path d="M12 4a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Z" />
                        </svg>
                      </div>
                    </span>
                  </span>
                </div>
                <yt-touch-feedback-shape data-cid={cids[24]} class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" aria-hidden="true" />
              </div>
            </yt-button-shape>
            {"  "}
          </ytmusic-menu-renderer>
          {" "}
        </ytmusic-item-thumbnail-overlay-renderer>
        {"  "}
        <div data-cid={cids[25]} className="hidden 2xl:box-content 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] 2xl:block 2xl:absolute 2xl:bottom-2 2xl:left-2" id="thumbnail-corner-overlay">
          {" "}
        </div>
        {"  "}
      </a>
      {"   "}
      <div data-cid={cids[26]} className="hidden 2xl:box-content 2xl:h-[4.2875rem] 2xl:flex 2xl:mt-2 2xl:flex-col">
        <div data-cid={cids[27]} className={cn("hidden 2xl:box-content 2xl:max-h-[2.4rem] 2xl:mt-2 2xl:overflow-hidden 2xl:whitespace-normal 2xl:line-clamp-2 2xl:block", styles.className)}>
          {" "}
          <yt-formatted-string data-cid={cids[28]} class="hidden 2xl:box-content 2xl:inline 2xl:text-base 2xl:font-medium 2xl:leading-[1.1875rem]">
            <a data-cid={cids[29]} className="hidden 2xl:box-content 2xl:inline-block 2xl:cursor-pointer 2xl:whitespace-nowrap" dir="auto" href={d.href2}>
              {d.label2}
            </a>
          </yt-formatted-string>
          {" "}
        </div>
        {" "}
        <span data-cid={cids[30]} className="hidden 2xl:box-content 2xl:h-[2.4rem] 2xl:flex 2xl:mt-[0.1875rem] 2xl:items-center">
          {"  "}
          <yt-formatted-string data-cid={cids[31]} class="hidden 2xl:box-content 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:flex-1 2xl:overflow-hidden 2xl:text-color-003 2xl:text-base 2xl:leading-[1.1875rem] 2xl:whitespace-normal 2xl:line-clamp-2 2xl:block">
            {d.text}
          </yt-formatted-string>
          {" "}
        </span>
        {"  "}
      </div>
      {" "}
      <div data-cid={cids[32]} className="hidden 2xl:box-content 2xl:block" id="footer-button" />
      {" "}
    </ytmusic-two-row-item-renderer>
  );
}
