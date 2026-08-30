import type { MediaTile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile2Data = {
  href: string;
  label: string;
  imgSrc: string;
  ariaLabel: string;
  href2: string;
  label2: string;
  text: string;
};
/** A media tile. */
export default function MediaTile2({ d, cids, styles }: { d: MediaTile2Data; cids: string[]; styles: MediaTile2Styles }) {
  return (
    <ytmusic-two-row-item-renderer data-cid={cids[0]} class={cn("box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:hidden", styles.className)} role="listitem">
      <a data-cid={cids[1]} className={cn("box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:hidden", styles.className2)} data-component="link" href={d.href} title={d.label}>
        {"  "}
        <ytmusic-thumbnail-renderer data-cid={cids[2]} class={cn("box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]", styles.className3)}>
          <yt-img-shadow data-cid={cids[3]} class="box-content flex items-center shrink-0 2xl:hidden" id="image">
            <img data-cid={cids[4]} className="box-content w-full h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:hidden" data-component="image" alt="" id="img" src={d.imgSrc} width="226" />
          </yt-img-shadow>
          {" "}
        </ytmusic-thumbnail-renderer>
        {"  "}
        <tp-yt-paper-ripple data-cid={cids[5]} class={cn("box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]", styles.className4)} id="ripple">
          {" "}
          <div data-cid={cids[6]} className={cn("box-content h-full block absolute top-0 overflow-hidden pointer-events-none 2xl:hidden", styles.className5)} id="waves" />
          {" "}
        </tp-yt-paper-ripple>
        {"  "}
        <ytmusic-item-thumbnail-overlay-renderer data-cid={cids[7]} class={cn("box-content w-45 h-45 block absolute left-0 2xl:hidden", styles.className6)}>
          <ytmusic-background-overlay-renderer data-cid={cids[8]} class={cn("box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] 2xl:hidden", styles.className7)} style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} id="background" />
          {" "}
          <div data-cid={cids[9]} className={cn("box-content h-full block absolute top-0 2xl:hidden", styles.className8)} id="content">
            <ytmusic-play-button-renderer data-cid={cids[10]} class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] 2xl:hidden" data-component="button" aria-disabled="false" aria-label={d.ariaLabel} id="play-button" role="button">
              <div data-cid={cids[11]} className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 2xl:hidden">
                {" "}
                <yt-icon data-cid={cids[12]} class="box-content flex relative justify-center items-center align-middle 2xl:hidden">
                  <span data-cid={cids[13]} className="box-content flex justify-center items-center 2xl:hidden">
                    <div data-cid={cids[14]} className="box-content block 2xl:hidden">
                      <svg data-cid={cids[15]} className={cn("box-content h-6 block overflow-hidden pointer-events-none 2xl:hidden", styles.className9)} data-component="icon" aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor">
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
          <ytmusic-menu-renderer data-cid={cids[16]} class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden 2xl:hidden" aria-haspopup="menu" aria-label="Action menu">
            {"  "}
            <yt-button-shape data-cid={cids[17]} class="box-content flex shrink-0 2xl:hidden" id="button-shape">
              <div data-cid={cids[18]} className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center 2xl:hidden" data-component="button" aria-label="Action menu">
                <div data-cid={cids[19]} className="box-content w-6 h-6 block leading-0 2xl:hidden" aria-hidden="true">
                  <span data-cid={cids[20]} className={cn("box-content h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden", styles.className10)}>
                    <span data-cid={cids[21]} className="box-content flex justify-center items-center 2xl:hidden">
                      <div data-cid={cids[22]} className="box-content block 2xl:hidden">
                        <svg data-cid={cids[23]} className={cn("box-content h-6 block overflow-hidden pointer-events-none 2xl:hidden", styles.className11)} data-component="icon" aria-hidden="true" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" focusable="false" fill="currentColor">
                          <path d="M12 4a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Zm0 6a2 2 0 100 4 2 2 0 000-4Z" />
                        </svg>
                      </div>
                    </span>
                  </span>
                </div>
                <yt-touch-feedback-shape data-cid={cids[24]} class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" aria-hidden="true" />
              </div>
            </yt-button-shape>
            {"  "}
          </ytmusic-menu-renderer>
          {" "}
        </ytmusic-item-thumbnail-overlay-renderer>
        {"  "}
        <div data-cid={cids[25]} className={cn("box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:hidden", styles.className12)} id="thumbnail-corner-overlay">
          {" "}
        </div>
        {"  "}
      </a>
      {"   "}
      <div data-cid={cids[26]} className={cn("box-content flex mt-2 flex-col 2xl:hidden", styles.className13)}>
        <div data-cid={cids[27]} className={cn("box-content max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:hidden", styles.className14)}>
          {" "}
          <yt-formatted-string data-cid={cids[28]} class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:hidden">
            <a data-cid={cids[29]} className={cn("box-content inline-block cursor-pointer 2xl:hidden", styles.className15)} data-component="link" dir="auto" href={d.href2}>
              {d.label2}
            </a>
          </yt-formatted-string>
          {" "}
        </div>
        {" "}
        <span data-cid={cids[30]} className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:hidden">
          {"  "}
          <yt-formatted-string data-cid={cids[31]} class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:hidden">
            {d.text}
          </yt-formatted-string>
          {" "}
        </span>
        {"  "}
      </div>
      {" "}
      <div data-cid={cids[32]} className="box-content block 2xl:hidden" id="footer-button" />
      {" "}
    </ytmusic-two-row-item-renderer>
  );
}
