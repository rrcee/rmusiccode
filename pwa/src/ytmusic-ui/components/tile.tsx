import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  text: string;
};
/** A content tile. */
export default function Tile({ d, cids, styles }: { d: TileData; cids: string[]; styles: TileStyles }) {
  return (
    <ytmusic-chip-cloud-chip-renderer data-cid={cids[0]} class={cn("box-content block pt-10 pb-2 align-top max-lg:pt-8 max-lg:pb-4 2xl:pt-12 2xl:pb-4", styles.className)}>
      <div data-cid={cids[1]} className="box-content block">
        <a data-cid={cids[2]} className={cn("h-9 flex min-w-8 rounded-lg justify-center items-center text-sm leading-4 bg-surface cursor-pointer hover:bg-border focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]", styles.className2)} aria-selected="false" role="tab">
          {"      "}
          <yt-formatted-string data-cid={cids[3]} class="box-content block mx-3 whitespace-nowrap text-nowrap focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]">
            {d.text}
          </yt-formatted-string>
          {"   "}
        </a>
        {" "}
      </div>
      {" "}
    </ytmusic-chip-cloud-chip-renderer>
  );
}
