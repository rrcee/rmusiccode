import Icon from "./svgs/svg-icon";
import Icon2 from "./svgs/svg-icon2";
import Icon3 from "./svgs/svg-icon3";
import Icon4 from "./svgs/svg-icon4";
import Icon5 from "./svgs/svg-icon5";
import Icon6 from "./svgs/svg-icon6";
import Icon7 from "./svgs/svg-icon7";
import Icon8 from "./svgs/svg-icon8";
import Icon9 from "./svgs/svg-icon9";
import Icon10 from "./svgs/svg-icon10";
import Icon11 from "./svgs/svg-icon11";
import Tile, { type TileData } from "./components/tile";
import Icon12 from "./svgs/svg-icon12";
import Icon13 from "./svgs/svg-icon13";
import Icon14 from "./svgs/svg-icon14";
import Icon15 from "./svgs/svg-icon15";
import Icon16 from "./svgs/svg-icon16";
import Icon17 from "./svgs/svg-icon17";
import Icon18 from "./svgs/svg-icon18";
import Icon19 from "./svgs/svg-icon19";
import Icon20 from "./svgs/svg-icon20";
import MediaTile, { type MediaTileData } from "./components/media-tile";
import MediaTile2, { type MediaTile2Data } from "./components/media-tile2";
import Icon21 from "./svgs/svg-icon21";
import Icon22 from "./svgs/svg-icon22";
import MediaTile3, { type MediaTile3Data } from "./components/media-tile3";
import Icon23 from "./svgs/svg-icon23";
import Icon24 from "./svgs/svg-icon24";
import Icon25 from "./svgs/svg-icon25";
import Icon26 from "./svgs/svg-icon26";
import Icon27 from "./svgs/svg-icon27";
import Icon28 from "./svgs/svg-icon28";
import Icon29 from "./svgs/svg-icon29";
import Icon30 from "./svgs/svg-icon30";
import Icon31 from "./svgs/svg-icon31";
import Icon32 from "./svgs/svg-icon32";
import Icon33 from "./svgs/svg-icon33";
import Icon34 from "./svgs/svg-icon34";
import Icon35 from "./svgs/svg-icon35";
import { Tile_cids, MediaTile_cids, MediaTile2_cids, MediaTile3_cids } from "./_cids";
import { Tile_styles, MediaTile_styles, MediaTile2_styles, MediaTile3_styles } from "./_styles";

const Tile_data: TileData[] = [
    { text: "Podcasts" },
    { text: "Energize" },
    { text: "Workout" },
    { text: "Feel good" },
    { text: "Relax" },
    { text: "Commute" },
    { text: "Romance" },
    { text: "Focus" },
    { text: "Party" },
    { text: "Sleep" },
    { text: "Sad" }
];
const MediaTile_data: MediaTileData[] = [
    { imgSrc: "/assets/cloned/images/c7f586cce1b7.jpg", ariaLabel: "Play PERRA", label: "PERRA", href: "/watch?v=9urN0w_0TsM&list=RDAMVM9urN0w_0TsM", label2: "PERRA", ariaLabel2: "Lil Naay • 8.2 million plays", label3: "Lil Naay • 8.2M plays", href2: "/channel/UCu_qmyIu8uT-stU7Mx-kcgw", label4: "Lil Naay", text: "8.2M plays", label5: "PERRA", href3: "/browse/MPREb_HTf6ZoU8Csf", label6: "PERRA" },
    { imgSrc: "/assets/cloned/images/f27337748fbb.jpg", ariaLabel: "Play Geezus", label: "Geezus", href: "/watch?v=eiYiOs1oOJE&list=RDAMVMeiYiOs1oOJE", label2: "Geezus", ariaLabel2: "The Game • 461 thousand plays", label3: "The Game • 461K plays", href2: "/channel/UC5zGDJcAF5VkW70c8raD-Lw", label4: "The Game", text: "461K plays", label5: "The Documentary III", href3: "/browse/MPREb_HIcQzrrqgMs", label6: "The Documentary III" },
    { imgSrc: "/assets/cloned/images/2a44e79a9493.jpg", ariaLabel: "Play No Jewelry", label: "No Jewelry", href: "/watch?v=kcVKyft6h98&list=RDAMVMkcVKyft6h98", label2: "No Jewelry", ariaLabel2: "Belly Gang Kushington • 704 thousand plays", label3: "Belly Gang Kushington • 704K plays", href2: "/channel/UCMC8AE2uHAHfqcldH_98j0g", label4: "Belly Gang Kushington", text: "704K plays", label5: "No Jewelry", href3: "/browse/MPREb_vf5gXpVmYP8", label6: "No Jewelry" },
    { imgSrc: "/assets/cloned/images/fb3d6ed0ee8e.jpg", ariaLabel: "Play Purple Switch", label: "Purple Switch", href: "/watch?v=YQBlS9lO0HQ&list=RDAMVMYQBlS9lO0HQ", label2: "Purple Switch", ariaLabel2: "FullyChop • 520 thousand plays", label3: "FullyChop • 520K plays", href2: "/channel/UChgYRK4ZUwOwiX19d3-CFqw", label4: "FullyChop", text: "520K plays", label5: "Purple Switch", href3: "/browse/MPREb_4eMsJ9yUQBQ", label6: "Purple Switch" },
    { imgSrc: "/assets/cloned/images/a81ec79153d3.jpg", ariaLabel: "Play Back Ina Yams", label: "Back Ina Yams", href: "/watch?v=pqj9-XBLG54&list=RDAMVMpqj9-XBLG54", label2: "Back Ina Yams", ariaLabel2: "Tee Grizzley • 128 thousand plays", label3: "Tee Grizzley • 128K plays", href2: "/channel/UC_CGl-6kaneFydGp5T7NtNA", label4: "Tee Grizzley", text: "128K plays", label5: "Back Ina Yams", href3: "/browse/MPREb_Fah1wZqD6DI", label6: "Back Ina Yams" }
];
const MediaTile2_data: MediaTile2Data[] = [
    { href: "/playlist?list=RDCLAK5uy_mQEtDIVgkJ1SRa_c7GnPWP9-FH7hAqarw", label: "Happy in The Alt-Rock '90s", imgSrc: "/assets/cloned/images/9b25dcf8854d.jpg", ariaLabel: "Play Happy in The Alt-Rock '90s", href2: "/playlist?list=RDCLAK5uy_mQEtDIVgkJ1SRa_c7GnPWP9-FH7hAqarw", label2: "Happy in The Alt-Rock '90s", text: "The Smashing Pumpkins, Foo Fighters, The Verve, Third Eye Blind" },
    { href: "/playlist?list=RDCLAK5uy_mnGtWbFwTECRAxxiePtn7X5GOP1ZODjGw", label: "Country Family ", imgSrc: "/assets/cloned/images/774bde2048a0.jpg", ariaLabel: "Play Country Family", href2: "/playlist?list=RDCLAK5uy_mnGtWbFwTECRAxxiePtn7X5GOP1ZODjGw", label2: "Country Family ", text: "Luke Combs, Jordan Davis, Carrie Underwood, Blake Shelton" },
    { href: "/playlist?list=RDCLAK5uy_ktU_MiPyxsoBpl68TuShAvg-ZCArB772M", label: "Good Vibes Only", imgSrc: "/assets/cloned/images/dce8a78e214e.jpg", ariaLabel: "Play Good Vibes Only", href2: "/playlist?list=RDCLAK5uy_ktU_MiPyxsoBpl68TuShAvg-ZCArB772M", label2: "Good Vibes Only", text: "Meghan Trainor, Taylor Swift, Ariana Grande, Charlie Puth" },
    { href: "/playlist?list=RDCLAK5uy_l2TM_OtxemStsZKi_LTP5F3RhYH8FGZDU", label: "Classic Sunshine Soul", imgSrc: "/assets/cloned/images/404e5bf54106.jpg", ariaLabel: "Play Classic Sunshine Soul", href2: "/playlist?list=RDCLAK5uy_l2TM_OtxemStsZKi_LTP5F3RhYH8FGZDU", label2: "Classic Sunshine Soul", text: "Stevie Wonder, Aretha Franklin, Maze, Jackson 5" },
    { href: "/playlist?list=RDCLAK5uy_kLYyE7wnPy-CdtP7hzzpru0iPr-eY2ea4", label: "Bachata Mix", imgSrc: "/assets/cloned/images/061f3752dc95.jpg", ariaLabel: "Play Bachata Mix", href2: "/playlist?list=RDCLAK5uy_kLYyE7wnPy-CdtP7hzzpru0iPr-eY2ea4", label2: "Bachata Mix", text: "Prince Royce, Romeo Santos, Aventura, Natti Natasha" }
];
const MediaTile3_data: MediaTile3Data[] = [
    { href: "/playlist?list=RDCLAK5uy_mkEwQuegHYB8_aAzBO8Q__6gGoaFblISw", label: "Feel-Good Hip Hop and R&B", imgSrc: "/assets/cloned/images/72c3b9865bad.jpg", ariaLabel: "Play Feel-Good Hip Hop and R&B", href2: "/playlist?list=RDCLAK5uy_mkEwQuegHYB8_aAzBO8Q__6gGoaFblISw", label2: "Feel-Good Hip Hop and R&B", text: "Drake, Tyla, Bad Bunny, Kendrick Lamar" },
    { href: "/playlist?list=RDCLAK5uy_lGEOjy5U8xV41C8_LyqNnAZKOH6sGyutI", label: "Bubble Pop", imgSrc: "/assets/cloned/images/594894ee1ba2.jpg", ariaLabel: "Play Bubble Pop", href2: "/playlist?list=RDCLAK5uy_lGEOjy5U8xV41C8_LyqNnAZKOH6sGyutI", label2: "Bubble Pop", text: "Dua Lipa, Sabrina Carpenter, Taylor Swift, Ariana Grande" },
    { href: "/playlist?list=RDCLAK5uy_mnGtWbFwTECRAxxiePtn7X5GOP1ZODjGw", label: "Country Family ", imgSrc: "/assets/cloned/images/774bde2048a0.jpg", ariaLabel: "Play Country Family", href2: "/playlist?list=RDCLAK5uy_mnGtWbFwTECRAxxiePtn7X5GOP1ZODjGw", label2: "Country Family ", text: "Luke Combs, Blake Shelton, Jordan Davis, Carrie Underwood" },
    { href: "/playlist?list=RDCLAK5uy_l2TM_OtxemStsZKi_LTP5F3RhYH8FGZDU", label: "Classic Sunshine Soul", imgSrc: "/assets/cloned/images/404e5bf54106.jpg", ariaLabel: "Play Classic Sunshine Soul", href2: "/playlist?list=RDCLAK5uy_l2TM_OtxemStsZKi_LTP5F3RhYH8FGZDU", label2: "Classic Sunshine Soul", text: "Stevie Wonder, Jackson 5, Michael Jackson, Aretha Franklin" },
    { href: "/playlist?list=RDCLAK5uy_kLYyE7wnPy-CdtP7hzzpru0iPr-eY2ea4", label: "Bachata Mix", imgSrc: "/assets/cloned/images/061f3752dc95.jpg", ariaLabel: "Play Bachata Mix", href2: "/playlist?list=RDCLAK5uy_kLYyE7wnPy-CdtP7hzzpru0iPr-eY2ea4", label2: "Bachata Mix", text: "Romeo Santos, Prince Royce, Aventura, Monchy & Alexandra" },
    { href: "/playlist?list=RDCLAK5uy_mQEtDIVgkJ1SRa_c7GnPWP9-FH7hAqarw", label: "Happy in The Alt-Rock '90s", imgSrc: "/assets/cloned/images/9b25dcf8854d.jpg", ariaLabel: "Play Happy in The Alt-Rock '90s", href2: "/playlist?list=RDCLAK5uy_mQEtDIVgkJ1SRa_c7GnPWP9-FH7hAqarw", label2: "Happy in The Alt-Rock '90s", text: "The Smashing Pumpkins, Foo Fighters, The Verve, Blur" }
];

export default function Page() {
  return (
    <>
      <ytmusic-app class="box-content h-28 block text-color-001" data-cid="n1">
        {" "}
        <ytmusic-app-layout class="box-content h-28 block" data-cid="n2" id="layout">
          {" "}
          <ytmusic-nav-bar class="w-317 h-16 flex fixed z-5 justify-start items-center max-md:w-[22.6875rem] md:max-lg:w-189 2xl:w-477" data-cid="n3" data-component="nav" role="navigation">
            <div className="w-18 h-full flex z-1 pl-4 items-center shrink-0 max-lg:w-37 2xl:w-60" data-cid="n4" id="left-content">
              <yt-icon-button class="w-10 h-10 block relative mr-3 p-2 rounded-[50%] text-[0rem] leading-[normal]" data-cid="n5" id="guide-button">
                <button className="h-6 inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center cursor-pointer" data-cid="n6" data-component="button" aria-label="Guide" aria-pressed="false" id="button">
                  {" "}
                  <yt-icon class="box-content w-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n7" id="guide-icon">
                    <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n8">
                      <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n9">
                        <Icon cid={"n10"} />
                      </div>
                    </span>
                  </yt-icon>
                  {" "}
                </button>
                <yt-interaction class="box-content w-10 h-10 block absolute top-0 left-0 pointer-events-none" data-cid="n11" id="interaction" />
              </yt-icon-button>
              {" "}
              <ytmusic-logo class="box-content h-6 block" data-cid="n12">
                <a className="box-content h-6 flex items-center cursor-pointer focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n13" data-component="link" aria-label="Home" href="/">
                  {" "}
                  <picture className="box-content w-[4.4375rem] h-6 block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n14">
                    <img className="box-content w-[4.4375rem] h-6 block overflow-clip focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n15" data-component="image" alt="" src="/assets/cloned/svg/b285a1168c08.svg" />
                    {" "}
                  </picture>
                  {" "}
                </a>
                {" "}
              </ytmusic-logo>
              {" "}
            </div>
            {" "}
            <div className="w-[60.8125rem] h-16 flex relative inset-0 py-2 pl-25 justify-start items-center transform-[none] max-md:w-18 max-lg:justify-end max-lg:static max-lg:inset-y-auto max-lg:left-auto max-lg:pl-0 md:max-lg:w-[27.1875rem] 2xl:w-367 2xl:absolute 2xl:left-238.5 2xl:min-w-0 2xl:ml-30 2xl:transform-[matrix(1,0,0,1,-734,0)] 2xl:right-auto 2xl:bottom-auto 2xl:pl-0" data-cid="n16">
              {" "}
              <ytmusic-search-box class="box-content w-120 block relative max-w-120 rounded-xs text-color-005 max-lg:w-13 max-md:z-1" data-cid="n17" role="search">
                <div className="box-content block rounded-xs overflow-hidden cursor-pointer focus:border-color-001 focus:text-color-001 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:[text-decoration-color:var(--color-001)]" data-cid="n18" aria-label="Search">
                  <div className="box-content border border-solid border-surface-2 flex rounded-lg justify-between items-center bg-surface-2 max-lg:border-[0] max-lg:border-initial max-lg:border-[initial] max-lg:bg-[initial] focus:text-color-001 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:[text-decoration-color:var(--color-001)]" data-cid="n19">
                    <yt-icon-button class="w-8 h-8 block relative my-1 mx-2.5 shrink-0 text-[0rem] leading-[normal] max-lg:text-color-001 focus:border-color-001 focus:text-color-001 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:[text-decoration-color:var(--color-001)]" data-cid="n20" label="Initiate search" title="Initiate search">
                      <button className="w-full h-8 inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center focus:border-color-001 focus:text-color-001 focus:outline-color-001 focus:[text-decoration-color:var(--color-001)]" data-cid="n21" data-component="button" aria-label="Initiate search" id="button">
                        {" "}
                        <yt-icon class="box-content w-4.5 h-4.5 inline-flex relative justify-center items-center align-middle focus:border-color-001 focus:text-color-001 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:[text-decoration-color:var(--color-001)]" data-cid="n22">
                          <span className="box-content flex justify-center items-center focus:border-color-001 focus:text-color-001 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:[text-decoration-color:var(--color-001)]" data-cid="n23">
                            <div className="box-content block focus:border-color-001 focus:text-color-001 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:[text-decoration-color:var(--color-001)]" data-cid="n24">
                              <Icon2 cid={"n25"} />
                            </div>
                          </span>
                        </yt-icon>
                        {" "}
                      </button>
                      <yt-interaction class="box-content w-8 h-8 block absolute top-0 left-0 pointer-events-none focus:border-color-001 focus:text-color-001 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:[text-decoration-color:var(--color-001)]" data-cid="n26" id="interaction" />
                    </yt-icon-button>
                    {" "}
                    <span className="box-content w-full hidden min-w-0 py-3 pr-2 text-base leading-[1.1875rem]" data-cid="n27" aria-hidden="true" id="placeholder">
                      Search
                    </span>
                    {" "}
                    <input className="w-106.5 h-10 block min-w-0 pr-14 overflow-clip text-base leading-[1.1875rem] text-left cursor-text max-lg:hidden focus:border-color-001 focus:text-color-001 focus:outline-color-001 focus:[text-decoration-color:var(--color-001)]" data-cid="n28" data-component="select" aria-autocomplete="list" aria-controls="suggestion-list" aria-haspopup="listbox" aria-owns="suggestion-list" dir="auto" id="input" placeholder="Search songs, albums, artists, podcasts" role="combobox" />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </ytmusic-search-box>
              {" "}
            </div>
            {" "}
            <div className="box-content w-[7.6875rem] h-10 flex z-1 pr-25 justify-end items-center shrink-0 max-md:pr-5 md:max-lg:pr-12.5 2xl:absolute 2xl:top-3 2xl:left-[105.3125rem] 2xl:min-w-0 2xl:pr-0" data-cid="n29" id="right-content">
              <div className="box-content w-0 h-[0.6875rem] block" data-cid="n30">
                {" "}
              </div>
              {" "}
              <yt-icon-button class="block relative m-2 text-[0rem] leading-[normal]" data-cid="n31" aria-label="Settings" id="menu-button" title="Settings">
                <button className="h-6 inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center cursor-pointer" data-cid="n32" data-component="button" id="button">
                  {" "}
                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n33">
                    <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n34">
                      <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n35">
                        <Icon3 cid={"n36"} />
                      </div>
                    </span>
                  </yt-icon>
                  {" "}
                </button>
                <yt-interaction class="box-content w-6 h-6 block absolute top-0 left-0 pointer-events-none" data-cid="n37" id="interaction" />
              </yt-icon-button>
              {" "}
              <a className="box-content h-8 flex ml-2 px-4 rounded-2xl items-center text-background text-sm font-medium leading-4 bg-color-001 cursor-pointer focus:bg-clr-2 focus:border-color-001 focus:border-2 focus:text-color-001 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:[text-decoration-color:var(--color-001)]" data-cid="n38" data-component="button" href={"https://accounts.google.com/ServiceLogin?ltmpl=music&service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fmusic.youtube.com%252F%26feature%3D__FEATURE__&hl=en"}>
                {" Sign in "}
              </a>
              {" "}
            </div>
            {" "}
          </ytmusic-nav-bar>
          {" "}
          <tp-yt-app-drawer class="box-content w-18 h-230 block fixed top-0 z-4 invisible max-md:w-[23.4375rem] max-md:h-233 max-lg:z-5 md:max-lg:w-192 md:max-lg:h-286 2xl:w-60 2xl:h-300 2xl:[visibility:inherit]" data-cid="n39" id="guide" role="navigation">
            {" "}
            <div className="box-content w-64 h-full block absolute top-0 py-30 transform-[matrix(1,0,0,1,-256,0)] 2xl:w-60 2xl:transform-[none]" data-cid="n40" id="contentContainer">
              <div className="w-18 h-230 border-r border-solid border-r-surface-2 block fixed top-0 bg-background max-lg:w-60 max-md:h-233 md:max-lg:h-286 2xl:w-60 2xl:h-300" data-cid="n41" id="guide-wrapper">
                <div className="box-content block mt-16 max-lg:hidden" data-cid="n42" id="guide-spacer" />
                {" "}
                <div className="box-content h-full block" data-cid="n43" id="guide-content">
                  <ytmusic-guide-renderer class="w-60 h-184 inline-block max-md:h-187 md:max-lg:h-240 2xl:h-254 2xl:py-2" data-cid="n44" id="guide-renderer">
                    {" "}
                    <div className="h-16 flex pl-4 items-center 2xl:hidden" data-cid="n45">
                      <yt-icon-button class="w-10 h-10 block relative mr-3 p-2 text-[0rem] leading-[normal]" data-cid="n46" id="guide-button">
                        <button className="h-6 inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center cursor-pointer" data-cid="n47" aria-label="Close" aria-pressed="true" id="button">
                          {" "}
                          <yt-icon class="box-content h-6 inline-flex relative justify-center items-center align-middle" data-cid="n48" id="guide-icon">
                            <span className="box-content h-6 flex justify-center items-center" data-cid="n49">
                              <div className="box-content h-6 block" data-cid="n50">
                                <Icon4 cid={"n51"} />
                              </div>
                            </span>
                          </yt-icon>
                          {" "}
                        </button>
                      </yt-icon-button>
                      {" "}
                      <ytmusic-logo class="box-content h-6 block" data-cid="n52">
                        <a className="box-content h-6 flex items-center cursor-pointer" data-cid="n53" aria-label="Home" href="/">
                          {" "}
                          <picture className="box-content w-[4.4375rem] h-6 block" data-cid="n54">
                            <img className="box-content w-[4.4375rem] h-6 block overflow-clip" data-cid="n55" alt="" src="/assets/cloned/svg/b285a1168c08.svg" />
                            {" "}
                          </picture>
                          {" "}
                        </a>
                        {" "}
                      </ytmusic-logo>
                      {" "}
                    </div>
                    {" "}
                    <div className="box-content h-full flex flex-col" data-cid="n56" id="sections">
                      <ytmusic-guide-section-renderer class="block max-h-full px-2 shrink-0" data-cid="n57">
                        <div className="box-content flex px-4 justify-center shrink-0 max-lg:hidden" data-cid="n58" id="buttons" />
                        {" "}
                        <div className="box-content block max-h-full overflow-auto" data-cid="n59" id="items">
                          <ytmusic-guide-entry-renderer class="box-content w-full inline-block relative text-xl font-medium leading-6" data-cid="n60">
                            <tp-yt-paper-item class="box-content min-h-12 flex relative px-4 rounded-lg items-center [font-family:Roboto,_Noto,_sans-serif] text-[1rem] font-normal whitespace-nowrap text-nowrap bg-surface cursor-pointer" data-cid="n61" aria-current="true" aria-disabled="false" role="link">
                              <yt-icon class="box-content flex relative mr-5 justify-center items-center align-middle" data-cid="n62">
                                <span className="box-content flex justify-center items-center" data-cid="n63">
                                  <div className="box-content block" data-cid="n64">
                                    <Icon5 cid={"n65"} />
                                  </div>
                                </span>
                              </yt-icon>
                              {" "}
                              <div className="box-content block" data-cid="n66">
                                <div className="box-content block" data-cid="n67">
                                  <yt-formatted-string class="box-content block font-medium" data-cid="n68">
                                    Home
                                  </yt-formatted-string>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block max-lg:hidden" data-cid="n69">
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </tp-yt-paper-item>
                            {" "}
                          </ytmusic-guide-entry-renderer>
                          <ytmusic-guide-entry-renderer class="box-content w-full inline-block relative text-xl font-medium leading-6" data-cid="n70">
                            <tp-yt-paper-item class="box-content min-h-12 flex relative px-4 rounded-lg items-center [font-family:Roboto,_Noto,_sans-serif] text-[1rem] font-normal whitespace-nowrap text-nowrap cursor-pointer" data-cid="n71" aria-current="false" aria-disabled="false" role="link">
                              <yt-icon class="box-content flex relative mr-5 justify-center items-center align-middle" data-cid="n72">
                                <span className="box-content flex justify-center items-center" data-cid="n73">
                                  <div className="box-content block" data-cid="n74">
                                    <Icon6 cid={"n75"} />
                                  </div>
                                </span>
                              </yt-icon>
                              {" "}
                              <div className="box-content block" data-cid="n76">
                                <div className="box-content block" data-cid="n77">
                                  <yt-formatted-string class="box-content block" data-cid="n78">
                                    Explore
                                  </yt-formatted-string>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block max-lg:hidden" data-cid="n79">
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </tp-yt-paper-item>
                            {" "}
                          </ytmusic-guide-entry-renderer>
                          <ytmusic-guide-entry-renderer class="box-content w-full inline-block relative text-xl font-medium leading-6" data-cid="n80">
                            <tp-yt-paper-item class="box-content min-h-12 flex relative px-4 rounded-lg items-center [font-family:Roboto,_Noto,_sans-serif] text-[1rem] font-normal whitespace-nowrap text-nowrap cursor-pointer" data-cid="n81" aria-current="false" aria-disabled="false" role="link">
                              <yt-icon class="box-content flex relative mr-5 justify-center items-center align-middle" data-cid="n82">
                                <span className="box-content flex justify-center items-center" data-cid="n83">
                                  <div className="box-content block" data-cid="n84">
                                    <Icon7 cid={"n85"} />
                                  </div>
                                </span>
                              </yt-icon>
                              {" "}
                              <div className="box-content block" data-cid="n86">
                                <div className="box-content block" data-cid="n87">
                                  <yt-formatted-string class="box-content block" data-cid="n88">
                                    Library
                                  </yt-formatted-string>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block max-lg:hidden" data-cid="n89">
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </tp-yt-paper-item>
                            {" "}
                          </ytmusic-guide-entry-renderer>
                        </div>
                        {" "}
                        <div className="box-content w-48 border-t border-solid border-t-surface-2 block my-6 mx-4" data-cid="n90" id="divider" />
                        {" "}
                      </ytmusic-guide-section-renderer>
                      <ytmusic-guide-signin-promo-renderer class="h-[5.9rem] block px-6" data-cid="n91">
                        {" "}
                        <yt-formatted-string class="box-content hidden leading-3 text-center" data-cid="n92">
                          Sign in
                        </yt-formatted-string>
                        {" "}
                        <yt-button-renderer class="box-content w-full inline-block mb-2" data-cid="n93" id="sign-in-button">
                          <yt-button-shape class="box-content flex grow basis-[1e-09px]" data-cid="n94">
                            <button className="h-9 flex relative min-w-0 px-4 rounded-[18px] justify-center items-center grow basis-[1e-09px] text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center whitespace-nowrap text-nowrap bg-surface cursor-pointer" data-cid="n95" aria-disabled="false" aria-label="Sign in">
                              <div className="box-content block overflow-hidden" data-cid="n96">
                                <span className="box-content inline" data-cid="n97" role="text">
                                  Sign in
                                </span>
                              </div>
                              <yt-touch-feedback-shape class="box-content w-48 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px]" data-cid="n98" aria-hidden="true" />
                            </button>
                          </yt-button-shape>
                        </yt-button-renderer>
                        {" "}
                        <yt-formatted-string class="box-content h-[3.15rem] block text-clr-0 text-xs leading-[1.0625rem]" data-cid="n99">
                          {"Sign in to create & share playlists, get personalized recommendations, and more."}
                        </yt-formatted-string>
                        {" "}
                      </ytmusic-guide-signin-promo-renderer>
                    </div>
                    {" "}
                  </ytmusic-guide-renderer>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </tp-yt-app-drawer>
          {" "}
          <div className="w-18 h-full block fixed top-0 z-4 max-md:hidden 2xl:hidden" data-cid="n100" id="mini-guide">
            <div className="box-content block mt-16 2xl:hidden" data-cid="n101" id="mini-guide-spacer" />
            {" "}
            <ytmusic-guide-renderer class="w-18 h-184 inline-block py-2 md:max-lg:h-240 2xl:hidden" data-cid="n102" id="mini-guide-renderer">
              {" "}
              <div className="box-content h-full flex flex-col 2xl:hidden" data-cid="n103" id="sections">
                <ytmusic-guide-section-renderer class="block max-h-full px-2 shrink-0 2xl:hidden" data-cid="n104">
                  {" "}
                  <div className="box-content block max-h-full overflow-auto 2xl:hidden" data-cid="n105" id="items">
                    <ytmusic-guide-entry-renderer class="box-content w-full inline-block relative text-xl font-medium leading-6 2xl:hidden" data-cid="n106">
                      <tp-yt-paper-item class="box-content block relative py-3 rounded-lg items-center [font-family:Roboto,_Noto,_sans-serif] text-[1rem] font-normal text-center whitespace-nowrap text-nowrap bg-surface cursor-pointer 2xl:hidden" data-cid="n107" aria-current="true" aria-disabled="false" role="link">
                        <yt-icon class="box-content inline-flex relative mb-[0.3125rem] justify-center items-center align-middle 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n108">
                          <span className="box-content flex justify-center items-center 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n109">
                            <div className="box-content block 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n110">
                              <Icon8 cid={"n111"} />
                            </div>
                          </span>
                        </yt-icon>
                        {" "}
                        <div className="box-content block 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n112">
                          <div className="box-content block 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n113">
                            <yt-formatted-string class="box-content block text-[0.625rem] font-medium leading-3 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n114">
                              Home
                            </yt-formatted-string>
                            {" "}
                          </div>
                          {" "}
                          <div className="box-content block 2xl:hidden" data-cid="n115">
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                      </tp-yt-paper-item>
                      {" "}
                    </ytmusic-guide-entry-renderer>
                    <ytmusic-guide-entry-renderer class="box-content w-full inline-block relative text-xl font-medium leading-6 2xl:hidden" data-cid="n116">
                      <tp-yt-paper-item class="box-content block relative py-3 rounded-lg items-center [font-family:Roboto,_Noto,_sans-serif] text-[1rem] font-normal text-center whitespace-nowrap text-nowrap cursor-pointer 2xl:hidden hover:bg-border" data-cid="n117" aria-current="false" aria-disabled="false" role="link">
                        <yt-icon class="box-content inline-flex relative mb-[0.3125rem] justify-center items-center align-middle 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n118">
                          <span className="box-content flex justify-center items-center 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n119">
                            <div className="box-content block 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n120">
                              <Icon9 cid={"n121"} />
                            </div>
                          </span>
                        </yt-icon>
                        {" "}
                        <div className="box-content block 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n122">
                          <div className="box-content block 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n123">
                            <yt-formatted-string class="box-content block text-[0.625rem] leading-3 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n124">
                              Explore
                            </yt-formatted-string>
                            {" "}
                          </div>
                          {" "}
                          <div className="box-content block 2xl:hidden" data-cid="n125">
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                      </tp-yt-paper-item>
                      {" "}
                    </ytmusic-guide-entry-renderer>
                    <ytmusic-guide-entry-renderer class="box-content w-full inline-block relative text-xl font-medium leading-6 2xl:hidden" data-cid="n126">
                      <tp-yt-paper-item class="box-content block relative py-3 rounded-lg items-center [font-family:Roboto,_Noto,_sans-serif] text-[1rem] font-normal text-center whitespace-nowrap text-nowrap cursor-pointer 2xl:hidden hover:bg-border" data-cid="n127" aria-current="false" aria-disabled="false" role="link">
                        <yt-icon class="box-content inline-flex relative mb-[0.3125rem] justify-center items-center align-middle 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n128">
                          <span className="box-content flex justify-center items-center 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n129">
                            <div className="box-content block 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n130">
                              <Icon10 cid={"n131"} />
                            </div>
                          </span>
                        </yt-icon>
                        {" "}
                        <div className="box-content block 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n132">
                          <div className="box-content block 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n133">
                            <yt-formatted-string class="box-content block text-[0.625rem] leading-3 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n134">
                              Library
                            </yt-formatted-string>
                            {" "}
                          </div>
                          {" "}
                          <div className="box-content block 2xl:hidden" data-cid="n135">
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                      </tp-yt-paper-item>
                      {" "}
                    </ytmusic-guide-entry-renderer>
                  </div>
                  {" "}
                </ytmusic-guide-section-renderer>
                <ytmusic-guide-signin-promo-renderer class="h-16.5 border-t border-solid border-t-surface-2 block relative py-3 text-center cursor-pointer 2xl:hidden before:content-[''] before:block before:absolute before:inset-y-0 before:inset-x-2 before:w-14 before:h-[4.0625rem] before:rounded-tl-lg max-md:before:w-[calc(100%_-_16px)] max-md:before:h-full max-md:before:right-auto max-md:before:bottom-auto 2xl:before:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n136">
                  <yt-icon class="box-content inline-flex relative mb-[0.3125rem] justify-center items-center align-middle 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n137">
                    <span className="box-content flex justify-center items-center 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n138">
                      <div className="box-content block 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n139">
                        <Icon11 cid={"n140"} />
                      </div>
                    </span>
                  </yt-icon>
                  {" "}
                  <yt-formatted-string class="box-content block leading-3 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n141">
                    Sign in
                  </yt-formatted-string>
                  {" "}
                  <yt-formatted-string class="box-content hidden text-clr-0 text-xs leading-[1.0625rem]" data-cid="n142">
                    {"Sign in to create & share playlists, get personalized recommendations, and more."}
                  </yt-formatted-string>
                  {" "}
                </ytmusic-guide-signin-promo-renderer>
              </div>
              {" "}
            </ytmusic-guide-renderer>
            {" "}
          </div>
          {" "}
          <div className="box-content block relative pb-28" data-cid="n143" id="content" role="main">
            <ytmusic-browse-response class="box-content h-0 block relative" data-cid="n144" id="browse-page">
              <div className="box-content block" data-cid="n145" id="background">
                <ytmusic-fullbleed-thumbnail-renderer class="box-content w-320 h-98 block absolute left-0 max-md:w-[23.4375rem] max-md:h-[397.9px] md:max-lg:w-192 md:max-lg:h-[31.3625rem] 2xl:w-480 2xl:h-[33.075rem]" data-cid="n146">
                  <picture className="box-content w-full inline" data-cid="n147">
                    {" "}
                    <source className="box-content inline" data-cid="n148" media="(max-width: 1440px)" srcSet="/assets/cloned/images/1cf62ed7d6d3.jpg" />
                    {" "}
                    <source className="box-content inline" data-cid="n149" media="(min-width: 1441px) and (max-width: 1920px)" srcSet="/assets/cloned/images/1181c7c12926.jpg" />
                    {" "}
                    <img className="box-content w-full h-98 inline overflow-clip object-cover max-md:h-99.5 md:max-lg:h-125.5 2xl:h-[33.0625rem]" data-cid="n150" data-component="image" alt="" src="/assets/cloned/images/1181c7c12926.jpg" />
                    {" "}
                  </picture>
                  {" "}
                </ytmusic-fullbleed-thumbnail-renderer>
              </div>
              {" "}
              <div className="box-content h-[3887.7px] block absolute inset-x-0 pt-16 pb-28 [background-size:1280px_400px] max-md:h-[228.0875rem] max-md:[background-size:375px_406px] md:max-lg:h-[240.675rem] md:max-lg:[background-size:768px_512px] 2xl:h-[286.1875rem] 2xl:[background-size:1920px_540px]" style={{ backgroundImage: "linear-gradient(var(--color-004), var(--background))" }} data-cid="n151">
                <div className="box-content block ml-18 max-md:ml-0 2xl:ml-60" data-cid="n152" id="alert-banner" />
                {" "}
                <div className="box-content block" data-cid="n153" id="header" />
                {" "}
                <div className="box-content block" data-cid="n154" id="alerts" />
                {" "}
                <div className="box-content h-full block ml-18 max-md:ml-0 2xl:ml-60" data-cid="n155" id="content-wrapper">
                  {" "}
                  <ytmusic-section-list-renderer class="box-content h-[3887.7px] block max-md:h-[228.0875rem] md:max-lg:h-[240.675rem] 2xl:h-[286.1875rem]" data-cid="n156">
                    <div className="box-content block" data-cid="n157" id="header">
                      <ytmusic-chip-cloud-renderer class="box-content flex max-w-249 mx-26.5 max-md:max-w-[21.4375rem] max-md:mx-4 md:max-lg:max-w-143 md:max-lg:mx-15.5 2xl:max-w-367" data-cid="n158">
                        <div className="box-content block" data-cid="n159" />
                        {" "}
                        <iron-selector class="box-content flex overflow-auto" data-cid="n160" id="chips">
                          {Tile_data.map((d, i) => <Tile key={i} d={d} cids={Tile_cids[i]} styles={Tile_styles[i]} />)}
                        </iron-selector>
                        {" "}
                      </ytmusic-chip-cloud-renderer>
                    </div>
                    {" "}
                    <div className="box-content flex flex-col" data-cid="n205" id="contents">
                      <ytmusic-carousel-shelf-renderer class="box-content h-[23.3125rem] block mb-6 max-md:h-[21.8125rem] max-md:mb-4 md:max-lg:h-[22.0125rem] 2xl:h-[28.0125rem]" data-cid="n206">
                        <div className="box-content block" data-cid="n207">
                          <div className="box-content flex max-w-249 mx-26.5 pt-8 justify-between gap-6 max-md:max-w-[21.4375rem] max-md:mx-4 max-lg:pt-4 max-md:gap-2 md:max-lg:max-w-143 md:max-lg:mx-15.5 2xl:max-w-367" data-cid="n208" id="header-group">
                            <ytmusic-carousel-shelf-basic-header-renderer class="box-content h-[3.225rem] flex items-center grow max-lg:h-[2.925rem] 2xl:h-[4.6875rem]" data-cid="n209">
                              {" "}
                              <div className="box-content w-full h-full block" data-cid="n210" id="content-group">
                                <yt-formatted-string class="box-content h-4 block max-w-140 mb-0.5 overflow-hidden text-muted text-sm leading-4 uppercase whitespace-nowrap text-nowrap max-lg:max-w-100 2xl:h-[1.1875rem] 2xl:max-w-200 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n211" title="SOUNDTRACK THE SEASON">
                                  SOUNDTRACK THE SEASON
                                </yt-formatted-string>
                                {" "}
                                <div className="box-content flex justify-between items-end gap-2" data-cid="n212" id="details">
                                  <yt-formatted-string class="box-content h-[2.1rem] max-w-140 max-h-[4.2rem] overflow-hidden [font-family:'YouTube_Sans',_Roboto,_'Noto_Naskh_Arabic_UI',_Arial,_sans-serif] text-[1.75rem] font-bold leading-[2.125rem] line-clamp-2 max-lg:h-[1.8rem] max-lg:max-w-100 max-lg:max-h-[3.6rem] max-lg:text-2xl max-lg:leading-[1.8125rem] 2xl:h-13.5 2xl:max-w-200 2xl:max-h-27 2xl:text-[2.8125rem] 2xl:leading-13.5" data-cid="n213" aria-level="2" role="heading">
                                    That summer feeling
                                  </yt-formatted-string>
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </ytmusic-carousel-shelf-basic-header-renderer>
                            {" "}
                            <div className="box-content flex items-end gap-4 max-md:gap-2" data-cid="n214">
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative opacity-40 p-2 rounded-[50%] text-muted-foreground text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n215" disabled id="previous-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center pointer-events-none" data-cid="n216" data-component="button" aria-label="Previous" disabled id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle pointer-events-none" data-cid="n217">
                                    <span className="box-content flex justify-center items-center pointer-events-none" data-cid="n218">
                                      <div className="box-content block pointer-events-none" data-cid="n219">
                                        <Icon12 cid={"n220"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n221" id="interaction" />
                              </yt-icon-button>
                              {" "}
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative p-2 rounded-[50%] text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n222" id="next-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center cursor-pointer" data-cid="n223" data-component="button" aria-label="Next" id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n224">
                                    <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n225">
                                      <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n226">
                                        <Icon13 cid={"n227"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n228" id="interaction" />
                              </yt-icon-button>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <ytmusic-carousel class="box-content h-[15.5875rem] block relative z-0 mt-4 mb-6 overflow-hidden max-md:h-[15.3875rem] 2xl:h-[18.825rem]" data-cid="n229" id="ytmusic-carousel">
                            <div className="box-content w-249 h-full grid relative mx-26.5 gap-y-4 gap-x-6 grid-cols-[180px_180px_180px_180px_180px_180px_180px_180px_180px_180px] grid-rows-[249.4px] [grid-auto-flow:column] overflow-x-scroll overflow-y-hidden whitespace-nowrap text-nowrap [list-style-type:disc] list-outside max-md:w-[23.4375rem] max-lg:gap-x-4 max-md:grid-cols-[176px_160px_160px_160px_160px_160px_160px_160px_160px_176px] max-md:grid-rows-[246.2px] max-lg:mx-0 md:max-lg:w-174 md:max-lg:grid-cols-[236px_180px_180px_180px_180px_180px_180px_180px_180px_236px] 2xl:w-367 2xl:grid-cols-[224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px] 2xl:grid-rows-[301.2px]" data-cid="n230" id="items">
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] max-md:pl-4 md:max-lg:pl-14 2xl:w-[224.7px] 2xl:h-[18.825rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n231" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n232" data-component="link" href="/playlist?list=RDCLAK5uy_lFScXiIb-vQnEX186pRe2ijM5r1CgxGEE" title="Country Summer">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n233">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n234" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n235" data-component="image" alt="" id="img" src="/assets/cloned/images/04f6c542f42f.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n236" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n237" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n238">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n239" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n240" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n241" data-component="button" aria-disabled="false" aria-label="Play Country Summer" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[matrix(1.00278,0,0,1.00278,0,0)] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n242">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n243">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n244">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n245">
                                                <Icon14 cid={"n246"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n247" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n248" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n249" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n250" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n251">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n252">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n253">
                                                  <Icon3 cid={"n254"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n255" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content h-[1.9125rem] block absolute right-[8.8375rem] bottom-2 left-2 max-md:h-[1.7rem] max-md:right-[7.8rem] 2xl:h-[2.3875rem] 2xl:right-[178.5px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n256" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n257">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n258">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n259">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n260" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_lFScXiIb-vQnEX186pRe2ijM5r1CgxGEE">
                                        Country Summer
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n261">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n262">
                                      Luke Combs, Morgan Wallen, Luke Bryan, Kenny Chesney
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n263" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n264" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n265" data-component="link" href="/playlist?list=RDCLAK5uy_mX4JK0m7lhZ8Egv1E7bbXox_e0k6rGejo" title={"Chill R&B"}>
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n266">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n267" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n268" data-component="image" alt="" id="img" src="/assets/cloned/images/1561040ad525.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n269" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n270" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n271">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n272" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n273" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n274" data-component="button" aria-disabled="false" aria-label={"Play Chill R&B"} id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[matrix(1.00278,0,0,1.00278,0,0)] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n275">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n276">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n277">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n278">
                                                <Icon14 cid={"n279"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n280" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n281" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n282" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n283" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n284">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n285">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n286">
                                                  <Icon3 cid={"n287"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n288" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content h-[1.9125rem] block absolute right-[8.8375rem] bottom-2 left-2 max-md:h-[1.7rem] max-md:right-[7.8rem] 2xl:h-[2.3875rem] 2xl:right-[178.5px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n289" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n290">
                                  <div className="box-content max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:max-h-[2.4rem]" data-cid="n291">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n292">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n293" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_mX4JK0m7lhZ8Egv1E7bbXox_e0k6rGejo">
                                        {"Chill R&B"}
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n294">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n295">
                                      Summer Walker, SZA, Kehlani, Kali Uchis
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n296" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n297" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n298" data-component="link" href="/playlist?list=RDCLAK5uy_lQi-t2mN-swhdhGPOg4h4Zw-P5KzdwUSM" title={"'90s R&B"}>
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n299">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n300" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n301" data-component="image" alt="" id="img" src="/assets/cloned/images/91a6b53ed0c0.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n302" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n303" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n304">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n305" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n306" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n307" data-component="button" aria-disabled="false" aria-label={"Play '90s R&B"} id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n308">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n309">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n310">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n311">
                                                <Icon14 cid={"n312"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n313" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n314" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n315" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n316" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n317">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n318">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n319">
                                                  <Icon3 cid={"n320"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n321" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n322" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n323">
                                  <div className="box-content max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:max-h-[2.4rem]" data-cid="n324">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n325">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n326" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_lQi-t2mN-swhdhGPOg4h4Zw-P5KzdwUSM">
                                        {"'90s R&B"}
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n327">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n328">
                                      Brandy, Aaliyah, TLC, Mary J. Blige
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n329" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n330" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n331" data-component="link" href="/playlist?list=RDCLAK5uy_lRZPrRiskUd_P0ld4JdIZNxOmqFVWOZIU" title="Yacht Rock Classics">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n332">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n333" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n334" data-component="image" alt="" id="img" src="/assets/cloned/images/626bd16466c1.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n335" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n336" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n337">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n338" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n339" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n340" data-component="button" aria-disabled="false" aria-label="Play Yacht Rock Classics" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n341">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n342">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n343">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n344">
                                                <Icon14 cid={"n345"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n346" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n347" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n348" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n349" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n350">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n351">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n352">
                                                  <Icon3 cid={"n353"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n354" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n355" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n356">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n357">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n358">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n359" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_lRZPrRiskUd_P0ld4JdIZNxOmqFVWOZIU">
                                        Yacht Rock Classics
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n360">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n361">
                                      {"Hall & Oates, FLEETWOOD MAC, Steely Dan, Kenny Loggins"}
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n362" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n363" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n364" data-component="link" href="/playlist?list=RDCLAK5uy_lGVd_xGC4tP_YwEfG0_oBU0HWdRPvctV8" title="Songs of Summer 2026">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n365">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n366" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n367" data-component="image" alt="" id="img" src="/assets/cloned/images/3ce8ac5f7f23.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n368" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n369" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n370">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n371" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n372" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n373" data-component="button" aria-disabled="false" aria-label="Play Songs of Summer 2026" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover: focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n374">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n375">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n376">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n377">
                                                <Icon14 cid={"n378"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n379" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n380" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n381" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n382" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n383">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n384">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n385">
                                                  <Icon3 cid={"n386"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n387" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n388" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n389">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n390">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n391">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n392" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_lGVd_xGC4tP_YwEfG0_oBU0HWdRPvctV8">
                                        Songs of Summer 2026
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n393">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n394">
                                      Ella Langley, Olivia Rodrigo, Taylor Swift, Olivia Dean
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n395" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n396" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n397" data-component="link" href="/playlist?list=RDCLAK5uy_mkEwQuegHYB8_aAzBO8Q__6gGoaFblISw" title={"Feel-Good Hip Hop and R&B"}>
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n398">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n399" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n400" data-component="image" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n401" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n402" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  <ytmusic-item-thumbnail-overlay-renderer class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:left-0" data-cid="n403">
                                    <ytmusic-background-overlay-renderer class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:opacity-[1e-06]" data-cid="n404" id="background" />
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0" data-cid="n405" id="content">
                                      <ytmusic-play-button-renderer class="hidden 2xl:box-content 2xl:w-10 2xl:h-10 2xl:block 2xl:absolute 2xl:right-3 2xl:bottom-3 2xl:opacity-[1e-06]" data-cid="n406" aria-disabled="false" aria-label={"Play '00s R&B"} id="play-button" role="button">
                                        <div className="hidden 2xl:box-content 2xl:w-10 2xl:h-10 2xl:flex 2xl:rounded-[50%] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden 2xl:bg-color-004" data-cid="n407">
                                          {" "}
                                          <yt-icon class="hidden 2xl:box-content 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n408">
                                            <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n409">
                                              <div className="hidden 2xl:box-content 2xl:block" data-cid="n410">
                                                <Icon15 cid={"n411"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:flex 2xl:absolute 2xl:top-2 2xl:right-1 2xl:opacity-[1e-06] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden" data-cid="n412" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="hidden 2xl:box-content 2xl:flex 2xl:shrink-0" data-cid="n413" id="button-shape">
                                        <div className="hidden 2xl:basis-full 2xl:shrink-0 2xl:h-9 2xl:flex 2xl:relative 2xl:min-w-0 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center" data-cid="n414" aria-label="Action menu">
                                          <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n415" aria-hidden="true">
                                            <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n416">
                                              <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n417">
                                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n418">
                                                  <Icon16 cid={"n419"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n420" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n421" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col max-md:h-[4.8875rem] 2xl:h-[4.2875rem]" data-cid="n422">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 max-md:h-[2.1rem] 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n423">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n424">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n425" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_mkEwQuegHYB8_aAzBO8Q__6gGoaFblISw">
                                        {"Feel-Good Hip Hop and R&B"}
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n426">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n427">
                                      Drake, Tyla, Bad Bunny, Kendrick Lamar
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n428" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n429" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n430" href="/playlist?list=RDCLAK5uy_nx7nHsos6LRHpPq2q2f_bKkT8eALsikiI" title="'90s Summer Sounds">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n431">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n432" id="image">
                                      <img className="box-content w-full h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n433" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n434" id="ripple">
                                    {" "}
                                    <div className="box-content w-45 h-full block absolute top-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n435" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n436" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n437">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n438">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n439">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n440" dir="auto" href="/playlist?list=RDCLAK5uy_nx7nHsos6LRHpPq2q2f_bKkT8eALsikiI">
                                        '90s Summer Sounds
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n441">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n442">
                                      The Notorious B.I.G., Ace of Base, Mariah Carey, Sheryl Crow
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n443" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                            </div>
                            {" "}
                          </ytmusic-carousel>
                          {" "}
                        </div>
                        {" "}
                      </ytmusic-carousel-shelf-renderer>
                      <ytmusic-carousel-shelf-renderer class="box-content h-[23.3125rem] block mb-6 max-md:h-[21.8125rem] max-md:mb-4 md:max-lg:h-[22.0125rem] 2xl:h-[26.7rem]" data-cid="n444">
                        <div className="box-content block" data-cid="n445">
                          <div className="box-content flex max-w-249 mx-26.5 pt-8 justify-between gap-6 max-md:max-w-[21.4375rem] max-md:mx-4 max-lg:pt-4 max-md:gap-2 md:max-lg:max-w-143 md:max-lg:mx-15.5 2xl:max-w-367" data-cid="n446" id="header-group">
                            <ytmusic-carousel-shelf-basic-header-renderer class="box-content h-[3.225rem] flex items-center grow max-lg:h-[2.925rem] 2xl:h-13.5" data-cid="n447">
                              {" "}
                              <div className="box-content w-full h-full block" data-cid="n448" id="content-group">
                                <yt-formatted-string class="box-content h-4 block max-w-140 mb-0.5 overflow-hidden text-muted text-sm leading-4 uppercase whitespace-nowrap text-nowrap max-lg:max-w-100 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n449" title="CLASSICS FROM EVERY DECADE">
                                  CLASSICS FROM EVERY DECADE
                                </yt-formatted-string>
                                {" "}
                                <div className="box-content flex justify-between items-end gap-2" data-cid="n450" id="details">
                                  <yt-formatted-string class="box-content max-w-140 max-h-[4.2rem] overflow-hidden [font-family:'YouTube_Sans',_Roboto,_'Noto_Naskh_Arabic_UI',_Arial,_sans-serif] text-[1.75rem] font-bold leading-[2.125rem] line-clamp-2 max-lg:max-w-100 max-lg:max-h-[3.6rem] max-lg:text-2xl max-lg:leading-[1.8125rem] 2xl:max-w-200 2xl:max-h-27 2xl:text-[2.8125rem] 2xl:leading-13.5" data-cid="n451" aria-level="2" role="heading">
                                    Throwbacks
                                  </yt-formatted-string>
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </ytmusic-carousel-shelf-basic-header-renderer>
                            {" "}
                            <div className="box-content flex items-end gap-4 max-md:gap-2" data-cid="n452">
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative opacity-40 p-2 rounded-[50%] text-muted-foreground text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n453" disabled id="previous-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center pointer-events-none" data-cid="n454" data-component="button" aria-label="Previous" disabled id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle pointer-events-none" data-cid="n455">
                                    <span className="box-content flex justify-center items-center pointer-events-none" data-cid="n456">
                                      <div className="box-content block pointer-events-none" data-cid="n457">
                                        <Icon12 cid={"n458"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n459" id="interaction" />
                              </yt-icon-button>
                              {" "}
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative p-2 rounded-[50%] text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n460" id="next-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center cursor-pointer" data-cid="n461" data-component="button" aria-label="Next" id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n462">
                                    <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n463">
                                      <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n464">
                                        <Icon13 cid={"n465"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n466" id="interaction" />
                              </yt-icon-button>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <ytmusic-carousel class="box-content h-[15.5875rem] block relative z-0 mt-4 mb-6 overflow-hidden max-md:h-[15.3875rem] 2xl:h-[18.825rem]" data-cid="n467" id="ytmusic-carousel">
                            <div className="box-content w-249 h-full grid relative mx-26.5 gap-y-4 gap-x-6 grid-cols-[180px_180px_180px_180px_180px_180px] grid-rows-[249.4px] [grid-auto-flow:column] overflow-x-scroll overflow-y-hidden whitespace-nowrap text-nowrap [list-style-type:disc] list-outside max-md:w-[23.4375rem] max-lg:gap-x-4 max-md:grid-cols-[176px_160px_160px_160px_160px_176px] max-md:grid-rows-[246.2px] max-lg:mx-0 md:max-lg:w-174 md:max-lg:grid-cols-[236px_180px_180px_180px_180px_236px] 2xl:w-367 2xl:grid-cols-[224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px] 2xl:grid-rows-[301.2px]" data-cid="n468" id="items">
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] max-md:pl-4 md:max-lg:pl-14 2xl:w-[224.7px] 2xl:h-[18.825rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n469" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n470" data-component="link" href="/playlist?list=RDCLAK5uy_lMzHW51iFg1Kx0d_2EHpzbOgCrwtu8cgI" title="The Hits: '80s">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n471">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n472" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n473" data-component="image" alt="" id="img" src="/assets/cloned/images/eef7b54c20c8.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n474" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n475" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n476">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n477" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n478" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n479" data-component="button" aria-disabled="false" aria-label="Play The Hits: '80s" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover: focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n480">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n481">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n482">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n483">
                                                <Icon14 cid={"n484"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n485" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n486" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n487" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n488" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n489">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n490">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n491">
                                                  <Icon3 cid={"n492"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n493" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content h-[1.9125rem] block absolute right-[8.8375rem] bottom-2 left-2 max-md:h-[1.7rem] max-md:right-[7.8rem] 2xl:h-[2.3875rem] 2xl:right-[178.5px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n494" id="thumbnail-corner-overlay">
                                    <ytmusic-thumbnail-renderer class="hidden 2xl:box-content 2xl:border 2xl:border-solid 2xl:border-color-001 2xl:block 2xl:relative 2xl:rounded-[50%] 2xl:overflow-hidden" data-cid="n495" aria-label="Samantha Portillo" role="link">
                                      <yt-img-shadow class="hidden 2xl:box-content 2xl:flex 2xl:rounded-[50%] 2xl:items-center 2xl:shrink-0 2xl:overflow-hidden" data-cid="n496" id="image">
                                        <img className="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:max-w-full 2xl:overflow-clip" data-cid="n497" alt="" id="img" src="/assets/cloned/images/bcc50fbee2ab.jpg" />
                                      </yt-img-shadow>
                                      {" "}
                                    </ytmusic-thumbnail-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content flex mt-2 flex-col" data-cid="n498">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n499">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n500">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n501" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_lMzHW51iFg1Kx0d_2EHpzbOgCrwtu8cgI">
                                        The Hits: '80s
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content flex mt-[0.1875rem] items-center" data-cid="n502">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n503">
                                      Michael Jackson, Madonna, Prince, Cyndi Lauper
                                      <a className="hidden 2xl:box-content 2xl:inline-block 2xl:cursor-pointer" data-cid="n504" href="/channel/UCMKB8tjMBZNef1-FO-127vA">
                                        Samantha Portillo
                                      </a>
                                      <span className="hidden 2xl:box-content 2xl:inline" data-cid="n505">
                                        {" • "}
                                      </span>
                                      <span className="hidden 2xl:box-content 2xl:inline" data-cid="n506">
                                        6.8M views
                                      </span>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n507" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n508" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n509" data-component="link" href="/playlist?list=RDCLAK5uy_lvHI2Z7dSfpD5g8wvmePjWPfYwq5IgkLo" title="'80s Rock">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n510">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n511" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n512" data-component="image" alt="" id="img" src="/assets/cloned/images/f86047dffcdf.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n513" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n514" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n515">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n516" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n517" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n518" data-component="button" aria-disabled="false" aria-label="Play '80s Rock" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n519">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n520">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n521">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n522">
                                                <Icon14 cid={"n523"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n524" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n525" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n526" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n527" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n528">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n529">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n530">
                                                  <Icon3 cid={"n531"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n532" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content h-[1.9125rem] block absolute right-[8.8375rem] bottom-2 left-2 max-md:h-[1.7rem] max-md:right-[7.8rem] 2xl:h-[2.3875rem] 2xl:right-[178.5px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n533" id="thumbnail-corner-overlay">
                                    <ytmusic-thumbnail-renderer class="hidden 2xl:box-content 2xl:border 2xl:border-solid 2xl:border-color-001 2xl:block 2xl:relative 2xl:rounded-[50%] 2xl:overflow-hidden" data-cid="n534" aria-label={"Mr.Miyagido & friends"} role="link">
                                      <yt-img-shadow class="hidden 2xl:box-content 2xl:flex 2xl:rounded-[50%] 2xl:items-center 2xl:shrink-0 2xl:overflow-hidden" data-cid="n535" id="image">
                                        <img className="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:max-w-full 2xl:overflow-clip" data-cid="n536" alt="" id="img" src="/assets/cloned/images/40bc0659cb98.jpg" />
                                      </yt-img-shadow>
                                      {" "}
                                    </ytmusic-thumbnail-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n537">
                                  <div className="box-content max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:max-h-[2.4rem]" data-cid="n538">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n539">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n540" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_lvHI2Z7dSfpD5g8wvmePjWPfYwq5IgkLo">
                                        '80s Rock
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n541">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n542">
                                      Bon Jovi, Van Halen, Mötley Crüe, Def Leppard
                                      <a className="hidden 2xl:box-content 2xl:inline-block 2xl:cursor-pointer" data-cid="n543" href="/channel/UCytZ_dPSe3MbOlMG8Qbd8Og">
                                        {"Mr.Miyagido & friends"}
                                      </a>
                                      <span className="hidden 2xl:box-content 2xl:inline" data-cid="n544">
                                        {" • "}
                                      </span>
                                      <span className="hidden 2xl:box-content 2xl:inline" data-cid="n545">
                                        2.7M views
                                      </span>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n546" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n547" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n548" data-component="link" href="/playlist?list=RDCLAK5uy_m_h-nx7OCFaq9AlyXv78lG0AuloqW_NUA" title="'90s Alternative">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n549">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n550" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n551" data-component="image" alt="" id="img" src="/assets/cloned/images/efb1308f9ac9.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n552" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n553" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n554">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n555" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n556" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n557" data-component="button" aria-disabled="false" aria-label="Play '90s Alternative" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover: focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n558">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n559">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n560">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n561">
                                                <Icon14 cid={"n562"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n563" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n564" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n565" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n566" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n567">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n568">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n569">
                                                  <Icon3 cid={"n570"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n571" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n572" id="thumbnail-corner-overlay">
                                    <ytmusic-thumbnail-renderer class="hidden 2xl:box-content 2xl:border 2xl:border-solid 2xl:border-color-001 2xl:block 2xl:relative 2xl:rounded-[50%] 2xl:overflow-hidden" data-cid="n573" aria-label="Brando" role="link">
                                      <yt-img-shadow class="hidden 2xl:box-content 2xl:flex 2xl:rounded-[50%] 2xl:items-center 2xl:shrink-0 2xl:overflow-hidden" data-cid="n574" id="image">
                                        <img className="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:max-w-full 2xl:overflow-clip" data-cid="n575" alt="" id="img" src="/assets/cloned/images/a31261ff854f.jpg" />
                                      </yt-img-shadow>
                                      {" "}
                                    </ytmusic-thumbnail-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content flex mt-2 flex-col" data-cid="n576">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n577">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n578">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n579" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_m_h-nx7OCFaq9AlyXv78lG0AuloqW_NUA">
                                        '90s Alternative
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content flex mt-[0.1875rem] items-center" data-cid="n580">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n581">
                                      Red Hot Chili Peppers, Pearl Jam, Nirvana, The Smashing Pumpkins
                                      <a className="hidden 2xl:box-content 2xl:inline-block 2xl:cursor-pointer" data-cid="n582" href="/channel/UCMvXGiCkQb1VnyloSzIECDg">
                                        Brando
                                      </a>
                                      <span className="hidden 2xl:box-content 2xl:inline" data-cid="n583">
                                        {" • "}
                                      </span>
                                      <span className="hidden 2xl:box-content 2xl:inline" data-cid="n584">
                                        12M views
                                      </span>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n585" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n586" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n587" data-component="link" href="/playlist?list=RDCLAK5uy_kVfoKrYSsJaHx3SLO8mp3WYuRHMrS8U_Q" title="Classic Country">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n588">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n589" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n590" data-component="image" alt="" id="img" src="/assets/cloned/images/bdad2494c05c.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n591" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n592" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n593">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n594" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n595" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n596" data-component="button" aria-disabled="false" aria-label="Play Classic Country" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n597">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n598">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n599">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n600">
                                                <Icon14 cid={"n601"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n602" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n603" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n604" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n605" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n606">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n607">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n608">
                                                  <Icon3 cid={"n609"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n610" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n611" id="thumbnail-corner-overlay">
                                    <ytmusic-thumbnail-renderer class="hidden 2xl:box-content 2xl:border 2xl:border-solid 2xl:border-color-001 2xl:block 2xl:relative 2xl:rounded-[50%] 2xl:overflow-hidden" data-cid="n612" aria-label="xScotty2Hottyx" role="link">
                                      <yt-img-shadow class="hidden 2xl:box-content 2xl:flex 2xl:rounded-[50%] 2xl:items-center 2xl:shrink-0 2xl:overflow-hidden" data-cid="n613" id="image">
                                        <img className="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:max-w-full 2xl:overflow-clip" data-cid="n614" alt="" id="img" src="/assets/cloned/images/0ca02037b997.jpg" />
                                      </yt-img-shadow>
                                      {" "}
                                    </ytmusic-thumbnail-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content flex mt-2 flex-col" data-cid="n615">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n616">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n617">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n618" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_kVfoKrYSsJaHx3SLO8mp3WYuRHMrS8U_Q">
                                        Classic Country
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content flex mt-[0.1875rem] items-center" data-cid="n619">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n620">
                                      Merle Haggard, Dolly Parton, George Strait, Willie Nelson
                                      <a className="hidden 2xl:box-content 2xl:inline-block 2xl:cursor-pointer" data-cid="n621" href="/channel/UCP91qmT8gaPU1tQflahZKDA">
                                        xScotty2Hottyx
                                      </a>
                                      <span className="hidden 2xl:box-content 2xl:inline" data-cid="n622">
                                        {" • "}
                                      </span>
                                      <span className="hidden 2xl:box-content 2xl:inline" data-cid="n623">
                                        9.7M views
                                      </span>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n624" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n625" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n626" data-component="link" href="/playlist?list=RDCLAK5uy_lWy02cQBnTVTlwuRauaGKeUDH3L6PXNxI" title="Feel-Good Classic Rock">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n627">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n628" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n629" data-component="image" alt="" id="img" src="/assets/cloned/images/7b430e8a4108.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n630" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n631" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n632">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n633" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n634" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n635" data-component="button" aria-disabled="false" aria-label="Play Feel-Good Classic Rock" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n636">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n637">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n638">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n639">
                                                <Icon14 cid={"n640"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n641" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n642" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n643" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n644" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n645">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n646">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n647">
                                                  <Icon3 cid={"n648"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n649" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n650" id="thumbnail-corner-overlay">
                                    <ytmusic-thumbnail-renderer class="hidden 2xl:box-content 2xl:border 2xl:border-solid 2xl:border-color-001 2xl:block 2xl:relative 2xl:rounded-[50%] 2xl:overflow-hidden" data-cid="n651" aria-label="Frank " role="link">
                                      <yt-img-shadow class="hidden 2xl:box-content 2xl:flex 2xl:rounded-[50%] 2xl:items-center 2xl:shrink-0 2xl:overflow-hidden" data-cid="n652" id="image">
                                        <img className="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:max-w-full 2xl:overflow-clip" data-cid="n653" alt="" id="img" src="/assets/cloned/images/abc1fe62c938.jpg" />
                                      </yt-img-shadow>
                                      {" "}
                                    </ytmusic-thumbnail-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content flex mt-2 flex-col" data-cid="n654">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n655">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n656">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n657" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_lWy02cQBnTVTlwuRauaGKeUDH3L6PXNxI">
                                        Feel-Good Classic Rock
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content flex mt-[0.1875rem] items-center" data-cid="n658">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n659">
                                      Creedence Clearwater Revival, Van Halen, Bruce Springsteen, Billy Joel
                                      <a className="hidden 2xl:box-content 2xl:inline-block 2xl:cursor-pointer" data-cid="n660" href="/channel/UCh0Troz7imH-JrXV-Mny8rg">
                                        {"Frank "}
                                      </a>
                                      <span className="hidden 2xl:box-content 2xl:inline" data-cid="n661">
                                        {" • "}
                                      </span>
                                      <span className="hidden 2xl:box-content 2xl:inline" data-cid="n662">
                                        698K views
                                      </span>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n663" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] max-md:pr-4 md:max-lg:pr-14 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n664" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n665" data-component="link" href="/playlist?list=RDCLAK5uy_nZiG9ehz_MQoWQxY5yElsLHCcG0tv9PRg" title="Classic Rock's Greatest Hits">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n666">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n667" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n668" data-component="image" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n669" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n670" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  <ytmusic-item-thumbnail-overlay-renderer class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:left-0" data-cid="n671">
                                    <ytmusic-background-overlay-renderer class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:opacity-[1e-06]" data-cid="n672" id="background" />
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0" data-cid="n673" id="content">
                                      <ytmusic-play-button-renderer class="hidden 2xl:box-content 2xl:w-10 2xl:h-10 2xl:block 2xl:absolute 2xl:right-3 2xl:bottom-3 2xl:opacity-[1e-06]" data-cid="n674" aria-disabled="false" aria-label="Play Old reggaetón" id="play-button" role="button">
                                        <div className="hidden 2xl:box-content 2xl:w-10 2xl:h-10 2xl:flex 2xl:rounded-[50%] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden 2xl:bg-color-004" data-cid="n675">
                                          {" "}
                                          <yt-icon class="hidden 2xl:box-content 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n676">
                                            <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n677">
                                              <div className="hidden 2xl:box-content 2xl:block" data-cid="n678">
                                                <Icon15 cid={"n679"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:flex 2xl:absolute 2xl:top-2 2xl:right-1 2xl:opacity-[1e-06] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden" data-cid="n680" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="hidden 2xl:box-content 2xl:flex 2xl:shrink-0" data-cid="n681" id="button-shape">
                                        <div className="hidden 2xl:basis-full 2xl:shrink-0 2xl:h-9 2xl:flex 2xl:relative 2xl:min-w-0 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center" data-cid="n682" aria-label="Action menu">
                                          <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n683" aria-hidden="true">
                                            <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n684">
                                              <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n685">
                                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n686">
                                                  <Icon16 cid={"n687"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n688" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n689" id="thumbnail-corner-overlay">
                                    <ytmusic-thumbnail-renderer class="hidden 2xl:box-content 2xl:border 2xl:border-solid 2xl:border-color-001 2xl:block 2xl:relative 2xl:rounded-[50%] 2xl:overflow-hidden" data-cid="n690" aria-label="Rodolfo Montemayor" role="link">
                                      <yt-img-shadow class="hidden 2xl:box-content 2xl:flex 2xl:rounded-[50%] 2xl:items-center 2xl:shrink-0 2xl:overflow-hidden" data-cid="n691" id="image">
                                        <img className="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:max-w-full 2xl:overflow-clip" data-cid="n692" alt="" id="img" src="/assets/cloned/images/66dd94a26c92.jpg" />
                                      </yt-img-shadow>
                                      {" "}
                                    </ytmusic-thumbnail-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col max-md:h-[4.8875rem] 2xl:h-[4.2875rem]" data-cid="n693">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 max-md:h-[2.1rem] 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n694">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n695">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n696" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_nZiG9ehz_MQoWQxY5yElsLHCcG0tv9PRg">
                                        Classic Rock's Greatest Hits
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n697">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n698">
                                      Led Zeppelin, Creedence Clearwater Revival, FLEETWOOD MAC, Tom Petty And The Heartbreakers
                                      <a className="hidden 2xl:box-content 2xl:inline-block 2xl:cursor-pointer" data-cid="n699" href="/channel/UCBz9CLqXAx--MKNp3ii-zJQ">
                                        Rodolfo Montemayor
                                      </a>
                                      <span className="hidden 2xl:box-content 2xl:inline" data-cid="n700">
                                        {" • "}
                                      </span>
                                      <span className="hidden 2xl:box-content 2xl:inline" data-cid="n701">
                                        1.7M views
                                      </span>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n702" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[18.825rem] 2xl:block 2xl:align-top" data-cid="n703" role="listitem">
                                <a className="hidden 2xl:box-content 2xl:block 2xl:relative 2xl:pt-[224.7px] 2xl:overflow-hidden 2xl:cursor-pointer" data-cid="n704" href="/playlist?list=PLv5AGjSz3ZMQGyjoRDaqqpOkaw-MVOFbR" title="Huntr/x e outros K-pops 💜🩷🩵">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:top-0 2xl:rounded-lg 2xl:overflow-hidden" data-cid="n705">
                                    <yt-img-shadow class="hidden 2xl:box-content 2xl:flex 2xl:items-center 2xl:shrink-0" data-cid="n706" id="image">
                                      <img className="hidden 2xl:box-content 2xl:w-full 2xl:h-[14.0625rem] 2xl:block 2xl:max-w-full 2xl:overflow-clip 2xl:object-cover" data-cid="n707" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:overflow-hidden 2xl:pointer-events-none" data-cid="n708" id="ripple">
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:overflow-hidden 2xl:pointer-events-none" data-cid="n709" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <div className="hidden 2xl:box-content 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] 2xl:block 2xl:absolute 2xl:bottom-2 2xl:left-2" data-cid="n710" id="thumbnail-corner-overlay" title="Tamirys Serrão">
                                    <ytmusic-thumbnail-renderer class="hidden 2xl:box-content 2xl:border 2xl:border-solid 2xl:border-color-001 2xl:block 2xl:relative 2xl:rounded-[50%] 2xl:overflow-hidden" data-cid="n711" aria-label="Tamirys Serrão" role="link">
                                      <yt-img-shadow class="hidden 2xl:box-content 2xl:flex 2xl:rounded-[50%] 2xl:items-center 2xl:shrink-0 2xl:overflow-hidden" data-cid="n712" id="image">
                                        <img className="hidden 2xl:box-content 2xl:w-px 2xl:h-px 2xl:block 2xl:max-w-full 2xl:mx-[1.1rem] 2xl:overflow-clip" data-cid="n713" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                                      </yt-img-shadow>
                                      {" "}
                                    </ytmusic-thumbnail-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="hidden 2xl:box-content 2xl:h-[4.2875rem] 2xl:flex 2xl:mt-2 2xl:flex-col" data-cid="n714">
                                  <div className="hidden 2xl:box-content 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:mt-2 2xl:overflow-hidden 2xl:whitespace-normal 2xl:line-clamp-2 2xl:block" data-cid="n715">
                                    {" "}
                                    <yt-formatted-string class="hidden 2xl:box-content 2xl:inline 2xl:text-base 2xl:font-medium 2xl:leading-[1.1875rem]" data-cid="n716">
                                      <a className="hidden 2xl:box-content 2xl:inline-block 2xl:cursor-pointer" data-cid="n717" dir="auto" href="/playlist?list=PLv5AGjSz3ZMQGyjoRDaqqpOkaw-MVOFbR">
                                        Huntr/x e outros K-pops 💜🩷🩵
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:mt-[0.1875rem] 2xl:items-center" data-cid="n718">
                                    {" "}
                                    <yt-formatted-string class="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:max-h-[2.4rem] 2xl:flex-1 2xl:overflow-hidden 2xl:text-color-003 2xl:text-base 2xl:leading-[1.1875rem] 2xl:whitespace-normal 2xl:line-clamp-2 2xl:block" data-cid="n719">
                                      <a className="hidden 2xl:box-content 2xl:inline-block 2xl:cursor-pointer" data-cid="n720" href="/channel/UCcq6rYqeN9IIOAG-5mPdVdQ">
                                        Tamirys Serrão
                                      </a>
                                      <span className="hidden 2xl:box-content 2xl:inline" data-cid="n721">
                                        {" • "}
                                      </span>
                                      <span className="hidden 2xl:box-content 2xl:inline" data-cid="n722">
                                        3.9M views
                                      </span>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n723" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                            </div>
                            {" "}
                          </ytmusic-carousel>
                          {" "}
                        </div>
                        {" "}
                      </ytmusic-carousel-shelf-renderer>
                      <ytmusic-tastebuilder-shelf-renderer class="box-content w-249 h-[9.5375rem] flex my-18 mx-26.5 justify-center items-center max-md:w-[21.4375rem] max-md:h-[240.7px] max-md:my-16 max-md:mx-4 max-lg:flex-col md:max-lg:w-143 md:max-lg:h-[310.9px] md:max-lg:my-14 md:max-lg:mx-15.5 2xl:w-367 2xl:h-[14.0625rem]" data-cid="n724">
                        <yt-img-shadow class="box-content w-124.5 block mr-12 shrink-0 max-md:w-[21.4375rem] max-lg:mb-6 max-lg:mr-0 md:max-lg:w-143 2xl:w-183.5" data-cid="n725">
                          <img className="box-content w-124.5 h-[9.5625rem] block max-w-full overflow-clip max-md:w-[21.4375rem] max-md:h-[6.5625rem] md:max-lg:w-143 md:max-lg:h-[10.9375rem] 2xl:w-183.5 2xl:h-[14.0625rem]" data-cid="n726" data-component="image" alt="" id="img" src="/assets/cloned/images/18081893d1c0.png" width="789" />
                        </yt-img-shadow>
                        {" "}
                        <div className="box-content h-[7.275rem] block max-lg:h-[6.975rem] max-lg:text-center" data-cid="n727">
                          <h2 className="box-content block text-[0.9375rem] font-bold leading-4.5" data-cid="n728" data-component="heading">
                            <yt-formatted-string class="box-content h-[1.8rem] block mb-2 [font-family:'YouTube_Sans',_Roboto,_'Noto_Naskh_Arabic_UI',_Arial,_sans-serif] text-2xl leading-[1.8125rem] max-lg:h-6 max-lg:text-xl max-lg:leading-6" data-cid="n729">
                              Tell us which artists you like
                            </yt-formatted-string>
                            {" "}
                          </h2>
                          {" "}
                          <yt-formatted-string class="box-content h-[1.225rem] block mb-6 text-muted text-sm leading-[1.25rem]" data-cid="n730">
                            We'll create an experience just for you
                          </yt-formatted-string>
                          {" "}
                          <yt-button-renderer class="box-content inline-block" data-cid="n731">
                            <yt-button-shape class="box-content flex grow basis-[1e-09px]" data-cid="n732">
                              <button className="h-9 flex relative min-w-0 px-4 rounded-[18px] justify-center items-center grow basis-[1e-09px] text-color-006 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center whitespace-nowrap text-nowrap bg-color-002 cursor-pointer max-lg:[text-align:inherit] hover:bg-clr-4 hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n733" data-component="button" aria-label="Let's go">
                                <div className="box-content block overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n734">
                                  <span className="box-content inline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n735" role="text">
                                    Let's go
                                  </span>
                                </div>
                                <yt-touch-feedback-shape class="box-content w-20 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n736" aria-hidden="true" />
                              </button>
                            </yt-button-shape>
                          </yt-button-renderer>
                          {" "}
                        </div>
                        {" "}
                      </ytmusic-tastebuilder-shelf-renderer>
                      <ytmusic-carousel-shelf-renderer class="box-content h-[24.3625rem] block mb-6 max-md:h-[21.8125rem] max-md:mb-4 md:max-lg:h-[23.0625rem] 2xl:h-[28.0125rem]" data-cid="n737">
                        <div className="box-content block" data-cid="n738">
                          <div className="box-content flex max-w-249 mx-26.5 pt-8 justify-between gap-6 max-md:max-w-[21.4375rem] max-md:mx-4 max-lg:pt-4 max-md:gap-2 md:max-lg:max-w-143 md:max-lg:mx-15.5 2xl:max-w-367" data-cid="n739" id="header-group">
                            <ytmusic-carousel-shelf-basic-header-renderer class="box-content h-[3.225rem] flex items-center grow max-lg:h-[2.925rem] 2xl:h-[4.6875rem]" data-cid="n740">
                              {" "}
                              <div className="box-content w-full h-full block" data-cid="n741" id="content-group">
                                <yt-formatted-string class="box-content h-4 block max-w-140 mb-0.5 overflow-hidden text-muted text-sm leading-4 uppercase whitespace-nowrap text-nowrap max-lg:max-w-100 2xl:h-[1.1875rem] 2xl:max-w-200 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n742" title="EASE INTO THE DAY">
                                  EASE INTO THE DAY
                                </yt-formatted-string>
                                {" "}
                                <div className="box-content flex justify-between items-end gap-2" data-cid="n743" id="details">
                                  <yt-formatted-string class="box-content h-[2.1rem] max-w-140 max-h-[4.2rem] overflow-hidden [font-family:'YouTube_Sans',_Roboto,_'Noto_Naskh_Arabic_UI',_Arial,_sans-serif] text-[1.75rem] font-bold leading-[2.125rem] line-clamp-2 max-lg:h-[1.8rem] max-lg:max-w-100 max-lg:max-h-[3.6rem] max-lg:text-2xl max-lg:leading-[1.8125rem] 2xl:h-13.5 2xl:max-w-200 2xl:max-h-27 2xl:text-[2.8125rem] 2xl:leading-13.5" data-cid="n744" aria-level="2" role="heading">
                                    Low key vibes
                                  </yt-formatted-string>
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </ytmusic-carousel-shelf-basic-header-renderer>
                            {" "}
                            <div className="box-content flex items-end gap-4 max-md:gap-2" data-cid="n745">
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative opacity-40 p-2 rounded-[50%] text-muted-foreground text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n746" disabled id="previous-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center pointer-events-none" data-cid="n747" data-component="button" aria-label="Previous" disabled id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle pointer-events-none" data-cid="n748">
                                    <span className="box-content flex justify-center items-center pointer-events-none" data-cid="n749">
                                      <div className="box-content block pointer-events-none" data-cid="n750">
                                        <Icon12 cid={"n751"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n752" id="interaction" />
                              </yt-icon-button>
                              {" "}
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative p-2 rounded-[50%] text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n753" id="next-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center cursor-pointer" data-cid="n754" data-component="button" aria-label="Next" id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n755">
                                    <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n756">
                                      <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n757">
                                        <Icon13 cid={"n758"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n759" id="interaction" />
                              </yt-icon-button>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <ytmusic-carousel class="box-content h-[16.6375rem] block relative z-0 mt-4 mb-6 overflow-hidden max-md:h-[15.3875rem] 2xl:h-[18.825rem]" data-cid="n760" id="ytmusic-carousel">
                            <div className="box-content w-249 h-full grid relative mx-26.5 gap-y-4 gap-x-6 grid-cols-[180px_180px_180px_180px_180px_180px_180px_180px_180px] grid-rows-[266.2px] [grid-auto-flow:column] overflow-x-scroll overflow-y-hidden whitespace-nowrap text-nowrap [list-style-type:disc] list-outside max-md:w-[23.4375rem] max-lg:gap-x-4 max-md:grid-cols-[176px_160px_160px_160px_160px_160px_160px_160px_176px] max-md:grid-rows-[246.2px] max-lg:mx-0 md:max-lg:w-174 md:max-lg:grid-cols-[236px_180px_180px_180px_180px_180px_180px_180px_236px] 2xl:w-367 2xl:grid-cols-[224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px] 2xl:grid-rows-[301.2px]" data-cid="n761" id="items">
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[16.6375rem] block align-top max-md:w-40 max-md:h-[15.3875rem] max-md:pl-4 md:max-lg:pl-14 2xl:w-[224.7px] 2xl:h-[18.825rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n762" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n763" data-component="link" href="/playlist?list=RDCLAK5uy_nDL8KeBrUagwyISwNmyEiSfYgz1gVCesg" title="Mellow Pop Classics">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n764">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n765" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n766" data-component="image" alt="" id="img" src="/assets/cloned/images/7e959dcaaba6.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n767" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n768" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n769">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n770" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n771" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n772" data-component="button" aria-disabled="false" aria-label="Play Mellow Pop Classics" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover: focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n773">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n774">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n775">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n776">
                                                <Icon14 cid={"n777"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n778" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n779" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n780" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n781" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n782">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n783">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n784">
                                                  <Icon3 cid={"n785"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n786" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content h-[1.9125rem] block absolute right-[8.8375rem] bottom-2 left-2 max-md:h-[1.7rem] max-md:right-[7.8rem] 2xl:h-[2.3875rem] 2xl:right-[178.5px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n787" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n788">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n789">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n790">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n791" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_nDL8KeBrUagwyISwNmyEiSfYgz1gVCesg">
                                        Mellow Pop Classics
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n792">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n793">
                                      Avril Lavigne, Lewis Capaldi, Robbie Williams, Ed Sheeran
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n794" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[16.6375rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n795" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n796" data-component="link" href="/playlist?list=RDCLAK5uy_k54Zr5UY8lb-LJx1XLj0q4rH355y9dJV8" title="'00s Rock Chillout">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n797">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n798" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n799" data-component="image" alt="" id="img" src="/assets/cloned/images/4a45bc1d548d.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n800" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n801" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n802">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n803" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n804" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n805" data-component="button" aria-disabled="false" aria-label="Play '00s Rock Chillout" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n806">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n807">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n808">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n809">
                                                <Icon14 cid={"n810"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n811" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n812" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n813" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n814" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n815">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n816">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n817">
                                                  <Icon3 cid={"n818"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n819" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content h-[1.9125rem] block absolute right-[8.8375rem] bottom-2 left-2 max-md:h-[1.7rem] max-md:right-[7.8rem] 2xl:h-[2.3875rem] 2xl:right-[178.5px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n820" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n821">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n822">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n823">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n824" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_k54Zr5UY8lb-LJx1XLj0q4rH355y9dJV8">
                                        '00s Rock Chillout
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n825">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n826">
                                      3 Doors Down, Nickelback, Coldplay, The Killers
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n827" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[16.6375rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n828" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n829" data-component="link" href="/playlist?list=RDCLAK5uy_m3bF5-eHO_vIUFnJkclyxJzcUed0ytWf0" title="Classic Rock Relaxation">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n830">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n831" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n832" data-component="image" alt="" id="img" src="/assets/cloned/images/97d4a231de6c.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n833" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n834" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n835">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n836" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n837" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n838" data-component="button" aria-disabled="false" aria-label="Play Classic Rock Relaxation" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[matrix(1.00279,0,0,1.00279,0,0)] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n839">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n840">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n841">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n842">
                                                <Icon14 cid={"n843"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n844" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n845" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n846" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n847" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n848">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n849">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n850">
                                                  <Icon3 cid={"n851"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n852" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n853" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content flex mt-2 flex-col" data-cid="n854">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n855">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n856">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n857" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_m3bF5-eHO_vIUFnJkclyxJzcUed0ytWf0">
                                        Classic Rock Relaxation
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content flex mt-[0.1875rem] items-center" data-cid="n858">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n859">
                                      {"The Beatles, The Rolling Stones, Simon & Garfunkel, Paul Simon"}
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n860" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[16.6375rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n861" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n862" data-component="link" href="/playlist?list=RDCLAK5uy_maCVamCosYLtz7MRW_uNPyqCdMwZ1FTLs" title="'80s Rock Ballads">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n863">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n864" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n865" data-component="image" alt="" id="img" src="/assets/cloned/images/fc7f5858e4d8.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n866" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n867" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n868">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n869" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n870" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n871" data-component="button" aria-disabled="false" aria-label="Play '80s Rock Ballads" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover: focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n872">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n873">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n874">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n875">
                                                <Icon14 cid={"n876"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n877" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n878" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n879" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n880" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n881">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n882">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n883">
                                                  <Icon3 cid={"n884"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n885" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n886" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n887">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n888">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n889">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n890" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_maCVamCosYLtz7MRW_uNPyqCdMwZ1FTLs">
                                        '80s Rock Ballads
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n891">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n892">
                                      Heart, REO Speedwagon, Bon Jovi, Journey
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n893" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[16.6375rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n894" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n895" data-component="link" href="/playlist?list=RDCLAK5uy_nm4NA8cldZNPqj1D0ayZxfySeY89qedRs" title="The Smoothest of Smooth Jazz">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n896">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n897" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n898" data-component="image" alt="" id="img" src="/assets/cloned/images/06fa1eba436b.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n899" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n900" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n901">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n902" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n903" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n904" data-component="button" aria-disabled="false" aria-label="Play The Smoothest of Smooth Jazz" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n905">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n906">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n907">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n908">
                                                <Icon14 cid={"n909"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n910" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n911" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n912" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n913" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n914">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n915">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n916">
                                                  <Icon3 cid={"n917"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n918" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n919" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content flex mt-2 flex-col" data-cid="n920">
                                  <div className="box-content h-[2.1rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n921">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n922">
                                      <a className="box-content inline-block cursor-pointer hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n923" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_nm4NA8cldZNPqj1D0ayZxfySeY89qedRs">
                                        The Smoothest of Smooth Jazz
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n924">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n925">
                                      Kenny G, Boney James, George Benson, Norman Brown
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n926" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[16.6375rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n927" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n928" data-component="link" href="/playlist?list=RDCLAK5uy_ldooV6iHaoPy6VKyVuHDq0DT4lh-3tRqQ" title="Gentle Piano">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n929">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n930" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n931" data-component="image" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n932" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n933" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  <ytmusic-item-thumbnail-overlay-renderer class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:left-0" data-cid="n934">
                                    <ytmusic-background-overlay-renderer class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:opacity-[1e-06]" data-cid="n935" id="background" />
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0" data-cid="n936" id="content">
                                      <ytmusic-play-button-renderer class="hidden 2xl:box-content 2xl:w-10 2xl:h-10 2xl:block 2xl:absolute 2xl:right-3 2xl:bottom-3 2xl:opacity-[1e-06]" data-cid="n937" aria-disabled="false" aria-label="Play '90s Summer Sounds" id="play-button" role="button">
                                        <div className="hidden 2xl:box-content 2xl:w-10 2xl:h-10 2xl:flex 2xl:rounded-[50%] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden 2xl:bg-color-004" data-cid="n938">
                                          {" "}
                                          <yt-icon class="hidden 2xl:box-content 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n939">
                                            <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n940">
                                              <div className="hidden 2xl:box-content 2xl:block" data-cid="n941">
                                                <Icon15 cid={"n942"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:flex 2xl:absolute 2xl:top-2 2xl:right-1 2xl:opacity-[1e-06] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden" data-cid="n943" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="hidden 2xl:box-content 2xl:flex 2xl:shrink-0" data-cid="n944" id="button-shape">
                                        <div className="hidden 2xl:basis-full 2xl:shrink-0 2xl:h-9 2xl:flex 2xl:relative 2xl:min-w-0 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center" data-cid="n945" aria-label="Action menu">
                                          <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n946" aria-hidden="true">
                                            <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n947">
                                              <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n948">
                                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n949">
                                                  <Icon16 cid={"n950"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n951" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n952" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n953">
                                  <div className="box-content max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:max-h-[2.4rem]" data-cid="n954">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n955">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n956" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_ldooV6iHaoPy6VKyVuHDq0DT4lh-3tRqQ">
                                        Gentle Piano
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n957">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n958">
                                      The Chillest, Matthew Mayer, Chad Lawson, Elliott Jack Sansom
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n959" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[16.6375rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n960" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n961" href="/playlist?list=RDCLAK5uy_liwwwIG8z4P25AWeLZ2Nvydx1GwbvndEI" title="Campfire Classics">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n962">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n963" id="image">
                                      <img className="box-content w-full h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n964" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n965" id="ripple">
                                    {" "}
                                    <div className="box-content w-45 h-full block absolute top-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n966" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n967" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n968">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n969">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n970">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n971" dir="auto" href="/playlist?list=RDCLAK5uy_liwwwIG8z4P25AWeLZ2Nvydx1GwbvndEI">
                                        Campfire Classics
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n972">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n973">
                                      {"Jack Johnson, PINK FLOYD, FLEETWOOD MAC, Bob Marley & The Wailers"}
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n974" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                            </div>
                            {" "}
                          </ytmusic-carousel>
                          {" "}
                        </div>
                        {" "}
                      </ytmusic-carousel-shelf-renderer>
                      <ytmusic-carousel-shelf-renderer class="box-content h-[22.3375rem] block mb-6 max-md:h-[19.6375rem] max-md:mb-4 md:max-lg:h-[21.3375rem] 2xl:h-[29.2125rem]" data-cid="n975">
                        <div className="box-content block" data-cid="n976">
                          <div className="box-content flex max-w-249 mx-26.5 pt-8 justify-between gap-6 max-md:max-w-[21.4375rem] max-md:mx-4 max-lg:pt-4 max-md:gap-2 md:max-lg:max-w-143 md:max-lg:mx-15.5 2xl:max-w-367" data-cid="n977" id="header-group">
                            <ytmusic-carousel-shelf-basic-header-renderer class="box-content h-9 flex items-center grow max-md:h-[1.8rem] 2xl:h-[4.6875rem]" data-cid="n978">
                              {" "}
                              <div className="box-content w-full block" data-cid="n979" id="content-group">
                                <yt-formatted-string class="box-content hidden max-w-140 mb-0.5 overflow-hidden text-muted text-sm leading-4 uppercase whitespace-nowrap text-nowrap 2xl:block 2xl:max-w-200 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n980" />
                                {" "}
                                <div className="box-content flex justify-between items-end gap-2" data-cid="n981" id="details">
                                  <yt-formatted-string class="box-content h-[2.1rem] max-w-140 max-h-[4.2rem] overflow-hidden [font-family:'YouTube_Sans',_Roboto,_'Noto_Naskh_Arabic_UI',_Arial,_sans-serif] text-[1.75rem] font-bold leading-[2.125rem] line-clamp-2 max-lg:h-[1.8rem] max-lg:max-w-100 max-lg:max-h-[3.6rem] max-lg:text-2xl max-lg:leading-[1.8125rem] 2xl:h-13.5 2xl:max-w-200 2xl:max-h-27 2xl:text-[2.8125rem] 2xl:leading-13.5" data-cid="n982" aria-level="2" role="heading">
                                    Mindful instrumentals
                                  </yt-formatted-string>
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </ytmusic-carousel-shelf-basic-header-renderer>
                            {" "}
                            <div className="box-content flex items-end gap-4 max-md:gap-2" data-cid="n983">
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative opacity-40 p-2 rounded-[50%] text-muted-foreground text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n984" disabled id="previous-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center pointer-events-none" data-cid="n985" data-component="button" aria-label="Previous" disabled id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle pointer-events-none" data-cid="n986">
                                    <span className="box-content flex justify-center items-center pointer-events-none" data-cid="n987">
                                      <div className="box-content block pointer-events-none" data-cid="n988">
                                        <Icon12 cid={"n989"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n990" id="interaction" />
                              </yt-icon-button>
                              {" "}
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative p-2 rounded-[50%] text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n991" id="next-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center cursor-pointer" data-cid="n992" data-component="button" aria-label="Next" id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n993">
                                    <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n994">
                                      <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n995">
                                        <Icon13 cid={"n996"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n997" id="interaction" />
                              </yt-icon-button>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <ytmusic-carousel class="box-content h-[15.5875rem] block relative z-0 mt-4 mb-6 overflow-hidden max-md:h-[14.3375rem] 2xl:h-[20.025rem]" data-cid="n998" id="ytmusic-carousel">
                            <div className="box-content w-249 h-full grid relative mx-26.5 gap-y-4 gap-x-6 grid-cols-[180px_180px_180px_180px_180px_180px_180px_180px_180px] grid-rows-[249.4px] [grid-auto-flow:column] overflow-x-scroll overflow-y-hidden whitespace-nowrap text-nowrap [list-style-type:disc] list-outside max-md:w-[23.4375rem] max-lg:gap-x-4 max-md:grid-cols-[176px_160px_160px_160px_160px_160px_160px_160px_176px] max-md:grid-rows-[229.4px] max-lg:mx-0 md:max-lg:w-174 md:max-lg:grid-cols-[236px_180px_180px_180px_180px_180px_180px_180px_236px] 2xl:w-367 2xl:grid-cols-[224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px] 2xl:grid-rows-[320.4px]" data-cid="n999" id="items">
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[14.3375rem] max-md:pl-4 md:max-lg:pl-14 2xl:w-[224.7px] 2xl:h-[20.025rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1000" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1001" data-component="link" href="/playlist?list=RDCLAK5uy_k16Jz1rrCopbgWM2ajYI8KFyLHgbBVVMk" title="Left Brain, Right Beat">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1002">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1003" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1004" data-component="image" alt="" id="img" src="/assets/cloned/images/0a368e7b89dd.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1005" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1006" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n1007">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n1008" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1009" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1010" data-component="button" aria-disabled="false" aria-label="Play Left Brain, Right Beat" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n1011">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1012">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1013">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1014">
                                                <Icon14 cid={"n1015"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1016" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1017" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n1018" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1019" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1020">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1021">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1022">
                                                  <Icon3 cid={"n1023"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1024" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content h-[1.9125rem] block absolute right-[8.8375rem] bottom-2 left-2 max-md:h-[1.7rem] max-md:right-[7.8rem] 2xl:h-[2.3875rem] 2xl:right-[178.5px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1025" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n1026">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n1027">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1028">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1029" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_k16Jz1rrCopbgWM2ajYI8KFyLHgbBVVMk">
                                        Left Brain, Right Beat
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n1030">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1031">
                                      Floating Points, Four Tet, Max Cooper, Fort Romeau
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n1032" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[14.3375rem] 2xl:w-[224.7px] 2xl:h-[20.025rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1033" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1034" data-component="link" href="/playlist?list=RDCLAK5uy_lX29m3FBic7gGpiZ_4hhJWAzLu4Sz6OME" title="Ambient Focus">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1035">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1036" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1037" data-component="image" alt="" id="img" src="/assets/cloned/images/95e53e0706d5.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1038" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1039" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n1040">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n1041" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1042" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1043" data-component="button" aria-disabled="false" aria-label="Play Ambient Focus" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[matrix(1.00275,0,0,1.00275,0,0)] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n1044">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1045">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1046">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1047">
                                                <Icon14 cid={"n1048"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1049" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1050" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n1051" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1052" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1053">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1054">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1055">
                                                  <Icon3 cid={"n1056"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1057" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content h-[1.9125rem] block absolute right-[8.8375rem] bottom-2 left-2 max-md:h-[1.7rem] max-md:right-[7.8rem] 2xl:h-[2.3875rem] 2xl:right-[178.5px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1058" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n1059">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n1060">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1061">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1062" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_lX29m3FBic7gGpiZ_4hhJWAzLu4Sz6OME">
                                        Ambient Focus
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n1063">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1064">
                                      Astropilot, Phillip Wilkerson, Cardamom, Warmth
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n1065" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[14.3375rem] 2xl:w-[224.7px] 2xl:h-[20.025rem]" data-cid="n1066" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1067" data-component="link" href="/playlist?list=RDCLAK5uy_n9hGvSNdO2TpX8jJuiThvnfrfIi1qNRnY" title="Classical Focus">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1068">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1069" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1070" data-component="image" alt="" id="img" src="/assets/cloned/images/660ca797701d.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1071" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1072" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n1073">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n1074" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1075" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1076" data-component="button" aria-disabled="false" aria-label="Play Classical Focus" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n1077">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1078">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1079">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1080">
                                                <Icon14 cid={"n1081"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1082" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1083" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n1084" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1085" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1086">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1087">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1088">
                                                  <Icon3 cid={"n1089"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1090" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1091" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n1092">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n1093">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1094">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1095" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_n9hGvSNdO2TpX8jJuiThvnfrfIi1qNRnY">
                                        Classical Focus
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n1096">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1097">
                                      Johann Sebastian Bach, Franz Schubert, Claude Debussy
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n1098" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[14.3375rem] 2xl:w-[224.7px] 2xl:h-[20.025rem]" data-cid="n1099" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1100" data-component="link" href="/playlist?list=RDCLAK5uy_lwuEBboC99qPJNGXs0Um80VvHYNtxSTFg" title="Epic Film Scores">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1101">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1102" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1103" data-component="image" alt="" id="img" src="/assets/cloned/images/32fcc4bb17d1.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1104" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1105" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n1106">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n1107" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1108" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1109" data-component="button" aria-disabled="false" aria-label="Play Epic Film Scores" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[matrix(1.00279,0,0,1.00279,0,0)] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n1110">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1111">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1112">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1113">
                                                <Icon14 cid={"n1114"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1115" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1116" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n1117" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1118" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1119">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1120">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1121">
                                                  <Icon3 cid={"n1122"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1123" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1124" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n1125">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n1126">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1127">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1128" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_lwuEBboC99qPJNGXs0Um80VvHYNtxSTFg">
                                        Epic Film Scores
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n1129">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1130">
                                      Ludwig Göransson, Hans Zimmer, John Williams, Michael Giacchino
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n1131" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[14.3375rem] 2xl:w-[224.7px] 2xl:h-[20.025rem]" data-cid="n1132" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1133" data-component="link" href="/playlist?list=RDCLAK5uy_k0UsUzNCizrQpUspNsoj2iO-EsevEywLY" title="Instrumental Pop Covers">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1134">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1135" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1136" data-component="image" alt="" id="img" src="/assets/cloned/images/d021ce7fc84e.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1137" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1138" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n1139">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n1140" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1141" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1142" data-component="button" aria-disabled="false" aria-label="Play Instrumental Pop Covers" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[matrix(1.00276,0,0,1.00276,0,0)] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n1143">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1144">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1145">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1146">
                                                <Icon14 cid={"n1147"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1148" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1149" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n1150" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1151" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1152">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1153">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1154">
                                                  <Icon3 cid={"n1155"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1156" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1157" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n1158">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n1159">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1160">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1161" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_k0UsUzNCizrQpUspNsoj2iO-EsevEywLY">
                                        Instrumental Pop Covers
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n1162">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1163">
                                      {"Vitamin String Quartet, 2CELLOS (SULIC & HAUSER), Rabello, Humphrey Linden"}
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n1164" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[14.3375rem] 2xl:w-[224.7px] 2xl:h-[20.025rem]" data-cid="n1165" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1166" data-component="link" href="/playlist?list=RDCLAK5uy_kL57PLcOmExjhzqGfGhvA82ZWe4fPH2c4" title="Muted Jazz">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1167">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1168" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1169" data-component="image" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1170" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1171" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  <ytmusic-item-thumbnail-overlay-renderer class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:left-0" data-cid="n1172">
                                    <ytmusic-background-overlay-renderer class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:opacity-[1e-06]" data-cid="n1173" id="background" />
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0" data-cid="n1174" id="content">
                                      <ytmusic-play-button-renderer class="hidden 2xl:box-content 2xl:w-10 2xl:h-10 2xl:block 2xl:absolute 2xl:right-3 2xl:bottom-3 2xl:opacity-[1e-06]" data-cid="n1175" aria-disabled="false" aria-label="Play Lofi Loft" id="play-button" role="button">
                                        <div className="hidden 2xl:box-content 2xl:w-10 2xl:h-10 2xl:flex 2xl:rounded-[50%] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden 2xl:bg-color-004" data-cid="n1176">
                                          {" "}
                                          <yt-icon class="hidden 2xl:box-content 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n1177">
                                            <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n1178">
                                              <div className="hidden 2xl:box-content 2xl:block" data-cid="n1179">
                                                <Icon15 cid={"n1180"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:flex 2xl:absolute 2xl:top-2 2xl:right-1 2xl:opacity-[1e-06] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden" data-cid="n1181" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="hidden 2xl:box-content 2xl:flex 2xl:shrink-0" data-cid="n1182" id="button-shape">
                                        <div className="hidden 2xl:basis-full 2xl:shrink-0 2xl:h-9 2xl:flex 2xl:relative 2xl:min-w-0 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center" data-cid="n1183" aria-label="Action menu">
                                          <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n1184" aria-hidden="true">
                                            <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n1185">
                                              <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n1186">
                                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n1187">
                                                  <Icon16 cid={"n1188"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n1189" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1190" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n1191">
                                  <div className="box-content max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:max-h-[2.4rem]" data-cid="n1192">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1193">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1194" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_kL57PLcOmExjhzqGfGhvA82ZWe4fPH2c4">
                                        Muted Jazz
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n1195">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1196">
                                      Hara Noda, Enzo Orefice trio, Dominick Farinacci, Magnus Öström
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n1197" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[14.3375rem] 2xl:w-[224.7px] 2xl:h-[20.025rem]" data-cid="n1198" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1199" href="/playlist?list=RDCLAK5uy_mPolD_J22gS1SKxufARWcTZd1UrAH_0ZI" title="deep chill">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1200">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1201" id="image">
                                      <img className="box-content w-full h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1202" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1203" id="ripple">
                                    {" "}
                                    <div className="box-content w-45 h-full block absolute top-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1204" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1205" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n1206">
                                  <div className="box-content max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:max-h-[2.4rem]" data-cid="n1207">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1208">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1209" dir="auto" href="/playlist?list=RDCLAK5uy_mPolD_J22gS1SKxufARWcTZd1UrAH_0ZI">
                                        deep chill
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n1210">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1211">
                                      Ben Böhmer, Kasbo, sleeperbuild, Lane 8
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n1212" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                            </div>
                            {" "}
                          </ytmusic-carousel>
                          {" "}
                        </div>
                        {" "}
                      </ytmusic-carousel-shelf-renderer>
                      <ytmusic-carousel-shelf-renderer class="box-content h-[22.3375rem] block mb-6 max-md:h-[22.4875rem] max-md:mb-4 md:max-lg:h-[21.3375rem] 2xl:h-[26.7rem]" data-cid="n1213">
                        <div className="box-content block" data-cid="n1214">
                          <div className="box-content flex max-w-249 mx-26.5 pt-8 justify-between gap-6 max-md:max-w-[21.4375rem] max-md:mx-4 max-lg:pt-4 max-md:gap-2 md:max-lg:max-w-143 md:max-lg:mx-15.5 2xl:max-w-367" data-cid="n1215" id="header-group">
                            <ytmusic-carousel-shelf-basic-header-renderer class="box-content h-9 flex items-center grow max-md:h-[3.6rem] 2xl:h-13.5" data-cid="n1216">
                              {" "}
                              <div className="box-content w-full block" data-cid="n1217" id="content-group">
                                {" "}
                                <div className="box-content flex justify-between items-end gap-2" data-cid="n1218" id="details">
                                  <yt-formatted-string class="box-content h-[2.1rem] max-w-140 max-h-[4.2rem] overflow-hidden [font-family:'YouTube_Sans',_Roboto,_'Noto_Naskh_Arabic_UI',_Arial,_sans-serif] text-[1.75rem] font-bold leading-[2.125rem] line-clamp-2 max-md:h-[3.6rem] max-lg:max-w-100 max-lg:max-h-[3.6rem] max-lg:text-2xl max-lg:leading-[1.8125rem] md:max-lg:h-[1.8rem] 2xl:h-13.5 2xl:max-w-200 2xl:max-h-27 2xl:text-[2.8125rem] 2xl:leading-13.5" data-cid="n1219" aria-level="2" role="heading">
                                    Trending community playlists
                                  </yt-formatted-string>
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </ytmusic-carousel-shelf-basic-header-renderer>
                            {" "}
                            <div className="box-content flex items-end gap-4 max-md:gap-2" data-cid="n1220">
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative opacity-40 p-2 rounded-[50%] text-muted-foreground text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n1221" disabled id="previous-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center pointer-events-none" data-cid="n1222" data-component="button" aria-label="Previous" disabled id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle pointer-events-none" data-cid="n1223">
                                    <span className="box-content flex justify-center items-center pointer-events-none" data-cid="n1224">
                                      <div className="box-content block pointer-events-none" data-cid="n1225">
                                        <Icon12 cid={"n1226"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n1227" id="interaction" />
                              </yt-icon-button>
                              {" "}
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative p-2 rounded-[50%] text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n1228" id="next-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center cursor-pointer" data-cid="n1229" data-component="button" aria-label="Next" id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1230">
                                    <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1231">
                                      <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1232">
                                        <Icon13 cid={"n1233"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n1234" id="interaction" />
                              </yt-icon-button>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <ytmusic-carousel class="box-content h-[15.5875rem] block relative z-0 mt-4 mb-6 overflow-hidden max-md:h-[15.3875rem] 2xl:h-[18.825rem]" data-cid="n1235" id="ytmusic-carousel">
                            <div className="box-content w-249 h-full grid relative mx-26.5 gap-y-4 gap-x-6 grid-cols-[180px_180px_180px_180px_180px_180px_180px_180px_180px_180px] grid-rows-[249.4px] [grid-auto-flow:column] overflow-x-scroll overflow-y-hidden whitespace-nowrap text-nowrap [list-style-type:disc] list-outside max-md:w-[23.4375rem] max-lg:gap-x-4 max-md:grid-cols-[176px_160px_160px_160px_160px_160px_160px_160px_160px_176px] max-md:grid-rows-[246.2px] max-lg:mx-0 md:max-lg:w-174 md:max-lg:grid-cols-[236px_180px_180px_180px_180px_180px_180px_180px_180px_236px] 2xl:w-367 2xl:grid-cols-[224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px] 2xl:grid-rows-[301.2px]" data-cid="n1236" id="items">
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] max-md:pl-4 md:max-lg:pl-14 2xl:w-[224.7px] 2xl:h-[18.825rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1237" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1238" data-component="link" href="/playlist?list=PLRHBIfBifUy4_i84p1zM14mUh739Ktvhb" title="Old school rap">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1239">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1240" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1241" data-component="image" alt="" id="img" src="/assets/cloned/images/d59079eba067.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1242" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1243" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:bg-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n1244">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n1245" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1246" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1247" data-component="button" aria-disabled="false" aria-label="Play Old school rap" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n1248">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1249">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1250">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1251">
                                                <Icon14 cid={"n1252"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1253" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1254" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n1255" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1256" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1257">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1258">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1259">
                                                  <Icon3 cid={"n1260"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1261" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content h-[1.9125rem] block absolute right-[8.8375rem] bottom-2 left-2 max-md:h-[1.7rem] max-md:right-[7.8rem] 2xl:h-[2.3875rem] 2xl:right-[178.5px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1262" id="thumbnail-corner-overlay" title={"Mr.Miyagido & friends"}>
                                    <ytmusic-thumbnail-renderer class="box-content border border-solid border-color-001 block relative rounded-[50%] overflow-hidden 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1263" aria-label={"Mr.Miyagido & friends"} role="link">
                                      <yt-img-shadow class="box-content flex rounded-[50%] items-center shrink-0 overflow-hidden 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1264" id="image">
                                        <img className="box-content w-[1.8125rem] h-[1.8125rem] block max-w-full overflow-clip max-md:w-[1.5625rem] max-md:h-[1.5625rem] 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1265" data-component="image" alt="" id="img" src="/assets/cloned/images/40bc0659cb98.jpg" />
                                      </yt-img-shadow>
                                      {" "}
                                    </ytmusic-thumbnail-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n1266">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n1267">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1268">
                                      <a className="box-content inline-block cursor-pointer hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1269" data-component="link" dir="auto" href="/playlist?list=PLRHBIfBifUy4_i84p1zM14mUh739Ktvhb">
                                        Old school rap
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n1270">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1271">
                                      <a className="box-content inline-block cursor-pointer 2xl:hidden hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1272" data-component="link" href="/channel/UCytZ_dPSe3MbOlMG8Qbd8Og">
                                        {"Mr.Miyagido & friends"}
                                      </a>
                                      <span className="box-content inline 2xl:hidden" data-cid="n1273">
                                        {" • "}
                                      </span>
                                      <span className="box-content inline 2xl:hidden" data-cid="n1274">
                                        2.7M views
                                      </span>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n1275" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1276" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1277" data-component="link" href="/playlist?list=PLYyuzqyr0zjx2KdlG_TaygQBxOqLfJchS" title="1990's-2000's Rock">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1278">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1279" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1280" data-component="image" alt="" id="img" src="/assets/cloned/images/48cb834fcd47.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1281" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1282" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:bg-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n1283">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n1284" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1285" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1286" data-component="button" aria-disabled="false" aria-label="Play 1990's-2000's Rock" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover: focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n1287">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1288">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1289">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1290">
                                                <Icon14 cid={"n1291"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1292" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1293" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n1294" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1295" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1296">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1297">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1298">
                                                  <Icon3 cid={"n1299"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1300" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content h-[1.9125rem] block absolute right-[8.8375rem] bottom-2 left-2 max-md:h-[1.7rem] max-md:right-[7.8rem] 2xl:h-[2.3875rem] 2xl:right-[178.5px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1301" id="thumbnail-corner-overlay" title="xScotty2Hottyx">
                                    <ytmusic-thumbnail-renderer class="box-content border border-solid border-color-001 block relative rounded-[50%] overflow-hidden 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1302" aria-label="xScotty2Hottyx" role="link">
                                      <yt-img-shadow class="box-content flex rounded-[50%] items-center shrink-0 overflow-hidden 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1303" id="image">
                                        <img className="box-content w-[1.8125rem] h-[1.8125rem] block max-w-full overflow-clip max-md:w-[1.5625rem] max-md:h-[1.5625rem] 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1304" data-component="image" alt="" id="img" src="/assets/cloned/images/0ca02037b997.jpg" />
                                      </yt-img-shadow>
                                      {" "}
                                    </ytmusic-thumbnail-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content flex mt-2 flex-col" data-cid="n1305">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n1306">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1307">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1308" data-component="link" dir="auto" href="/playlist?list=PLYyuzqyr0zjx2KdlG_TaygQBxOqLfJchS">
                                        1990's-2000's Rock
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content flex mt-[0.1875rem] items-center" data-cid="n1309">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[1.05rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 max-md:h-[2.1rem] 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1310">
                                      <a className="box-content inline-block cursor-pointer 2xl:hidden hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1311" data-component="link" href="/channel/UCP91qmT8gaPU1tQflahZKDA">
                                        xScotty2Hottyx
                                      </a>
                                      <span className="box-content inline 2xl:hidden" data-cid="n1312">
                                        {" • "}
                                      </span>
                                      <span className="box-content h-full inline 2xl:hidden" data-cid="n1313">
                                        9.7M views
                                      </span>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n1314" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n1315" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1316" data-component="link" href="/playlist?list=PLqR5MBikqj9iZrcngtGoTXyxfxxvqh-tu" title="white girl music">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1317">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1318" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1319" data-component="image" alt="" id="img" src="/assets/cloned/images/458884f4ded4.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1320" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1321" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:bg-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n1322">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n1323" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1324" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1325" data-component="button" aria-disabled="false" aria-label="Play white girl music" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n1326">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1327">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1328">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1329">
                                                <Icon14 cid={"n1330"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1331" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1332" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n1333" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1334" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1335">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1336">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1337">
                                                  <Icon3 cid={"n1338"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1339" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1340" id="thumbnail-corner-overlay" title="Samantha Portillo">
                                    <ytmusic-thumbnail-renderer class="box-content border border-solid border-color-001 block relative rounded-[50%] overflow-hidden 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1341" aria-label="Samantha Portillo" role="link">
                                      <yt-img-shadow class="box-content flex rounded-[50%] items-center shrink-0 overflow-hidden 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1342" id="image">
                                        <img className="box-content w-[1.8125rem] h-[1.8125rem] block max-w-full overflow-clip max-md:w-[1.5625rem] max-md:h-[1.5625rem] 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1343" data-component="image" alt="" id="img" src="/assets/cloned/images/bcc50fbee2ab.jpg" />
                                      </yt-img-shadow>
                                      {" "}
                                    </ytmusic-thumbnail-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n1344">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n1345">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1346">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1347" data-component="link" dir="auto" href="/playlist?list=PLqR5MBikqj9iZrcngtGoTXyxfxxvqh-tu">
                                        white girl music
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n1348">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1349">
                                      <a className="box-content inline-block cursor-pointer 2xl:hidden hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1350" data-component="link" href="/channel/UCMKB8tjMBZNef1-FO-127vA">
                                        Samantha Portillo
                                      </a>
                                      <span className="box-content inline 2xl:hidden" data-cid="n1351">
                                        {" • "}
                                      </span>
                                      <span className="box-content inline 2xl:hidden" data-cid="n1352">
                                        6.8M views
                                      </span>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n1353" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n1354" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1355" data-component="link" href="/playlist?list=PLRJFIP8T9f__qydbKty5Y8hfhd_7yFdBa" title="Old reggaetón">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1356">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1357" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1358" data-component="image" alt="" id="img" src="/assets/cloned/images/f550e671d71d.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1359" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1360" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:bg-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n1361">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n1362" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1363" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1364" data-component="button" aria-disabled="false" aria-label="Play Old reggaetón" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n1365">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1366">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1367">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1368">
                                                <Icon14 cid={"n1369"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1370" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1371" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n1372" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1373" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1374">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1375">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1376">
                                                  <Icon3 cid={"n1377"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1378" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1379" id="thumbnail-corner-overlay" title="Rodolfo Montemayor">
                                    <ytmusic-thumbnail-renderer class="box-content border border-solid border-color-001 block relative rounded-[50%] overflow-hidden 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1380" aria-label="Rodolfo Montemayor" role="link">
                                      <yt-img-shadow class="box-content flex rounded-[50%] items-center shrink-0 overflow-hidden 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1381" id="image">
                                        <img className="box-content w-[1.8125rem] h-[1.8125rem] block max-w-full overflow-clip max-md:w-[1.5625rem] max-md:h-[1.5625rem] 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1382" data-component="image" alt="" id="img" src="/assets/cloned/images/66dd94a26c92.jpg" />
                                      </yt-img-shadow>
                                      {" "}
                                    </ytmusic-thumbnail-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n1383">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n1384">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1385">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1386" data-component="link" dir="auto" href="/playlist?list=PLRJFIP8T9f__qydbKty5Y8hfhd_7yFdBa">
                                        Old reggaetón
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n1387">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1388">
                                      <a className="box-content inline-block cursor-pointer 2xl:hidden hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1389" data-component="link" href="/channel/UCBz9CLqXAx--MKNp3ii-zJQ">
                                        Rodolfo Montemayor
                                      </a>
                                      <span className="box-content inline 2xl:hidden" data-cid="n1390">
                                        {" • "}
                                      </span>
                                      <span className="box-content inline 2xl:hidden" data-cid="n1391">
                                        1.7M views
                                      </span>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n1392" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n1393" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1394" data-component="link" href="/playlist?list=PL7_0lTEZmnoaZ8PVY-G5PxMgvbUeL5NZ2" title="70's-80's Mixed Rock">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1395">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1396" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1397" data-component="image" alt="" id="img" src="/assets/cloned/images/990204b5baba.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1398" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1399" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:bg-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n1400">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n1401" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1402" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1403" data-component="button" aria-disabled="false" aria-label="Play 70's-80's Mixed Rock" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 hover:transform-[none] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] focus:transform-[none]" data-cid="n1404">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1405">
                                            <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1406">
                                              <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1407">
                                                <Icon14 cid={"n1408"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group-hover:opacity-100" data-cid="n1409" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1410" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center hover:bg-border hover:border-clr-2 focus:outline-clr-5 focus:[outline-style:auto]" data-cid="n1411" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1412" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1413">
                                              <span className="box-content flex justify-center items-center focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1414">
                                                <div className="box-content block focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1415">
                                                  <Icon3 cid={"n1416"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1417" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1418" id="thumbnail-corner-overlay" title="zatantony">
                                    <ytmusic-thumbnail-renderer class="box-content border border-solid border-color-001 block relative rounded-[50%] overflow-hidden 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1419" aria-label="zatantony" role="link">
                                      <yt-img-shadow class="box-content flex rounded-[50%] items-center shrink-0 overflow-hidden 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1420" id="image">
                                        <img className="box-content w-[1.8125rem] h-[1.8125rem] block max-w-full overflow-clip max-md:w-[1.5625rem] max-md:h-[1.5625rem] 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1421" data-component="image" alt="" id="img" src="/assets/cloned/images/c7c65ff214e3.jpg" />
                                      </yt-img-shadow>
                                      {" "}
                                    </ytmusic-thumbnail-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content flex mt-2 flex-col" data-cid="n1422">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n1423">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1424">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1425" data-component="link" dir="auto" href="/playlist?list=PL7_0lTEZmnoaZ8PVY-G5PxMgvbUeL5NZ2">
                                        70's-80's Mixed Rock
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content flex mt-[0.1875rem] items-center" data-cid="n1426">
                                    {" "}
                                    <yt-formatted-string class="box-content max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1427">
                                      <a className="box-content inline-block cursor-pointer 2xl:hidden hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1428" data-component="link" href="/channel/UCWDWYFy-a8oCesn3cVh1jpQ">
                                        zatantony
                                      </a>
                                      <span className="box-content inline 2xl:hidden" data-cid="n1429">
                                        {" • "}
                                      </span>
                                      <span className="box-content inline 2xl:hidden" data-cid="n1430">
                                        2.9M views
                                      </span>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n1431" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n1432" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1433" data-component="link" href="/playlist?list=PLv5AGjSz3ZMQGyjoRDaqqpOkaw-MVOFbR" title="Huntr/x e outros K-pops 💜🩷🩵">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1434">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1435" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1436" data-component="image" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1437" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1438" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  <ytmusic-item-thumbnail-overlay-renderer class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:left-0" data-cid="n1439">
                                    <ytmusic-background-overlay-renderer class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:opacity-[1e-06]" data-cid="n1440" id="background" />
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0" data-cid="n1441" id="content">
                                      <ytmusic-play-button-renderer class="hidden 2xl:box-content 2xl:w-10 2xl:h-10 2xl:block 2xl:absolute 2xl:right-3 2xl:bottom-3 2xl:opacity-[1e-06]" data-cid="n1442" aria-disabled="false" aria-label="Play Beast Mode Hip-Hop" id="play-button" role="button">
                                        <div className="hidden 2xl:box-content 2xl:w-10 2xl:h-10 2xl:flex 2xl:rounded-[50%] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden 2xl:bg-color-004" data-cid="n1443">
                                          {" "}
                                          <yt-icon class="hidden 2xl:box-content 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n1444">
                                            <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n1445">
                                              <div className="hidden 2xl:box-content 2xl:block" data-cid="n1446">
                                                <Icon15 cid={"n1447"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:flex 2xl:absolute 2xl:top-2 2xl:right-1 2xl:opacity-[1e-06] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden" data-cid="n1448" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="hidden 2xl:box-content 2xl:flex 2xl:shrink-0" data-cid="n1449" id="button-shape">
                                        <div className="hidden 2xl:basis-full 2xl:shrink-0 2xl:h-9 2xl:flex 2xl:relative 2xl:min-w-0 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center" data-cid="n1450" aria-label="Action menu">
                                          <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n1451" aria-hidden="true">
                                            <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n1452">
                                              <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n1453">
                                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n1454">
                                                  <Icon16 cid={"n1455"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n1456" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1457" id="thumbnail-corner-overlay" title="Tamirys Serrão">
                                    <ytmusic-thumbnail-renderer class="box-content border border-solid border-color-001 block relative rounded-[50%] overflow-hidden 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1458" aria-label="Tamirys Serrão" role="link">
                                      <yt-img-shadow class="box-content flex rounded-[50%] items-center shrink-0 overflow-hidden 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1459" id="image">
                                        <img className="box-content w-px h-px block max-w-full mx-3.5 overflow-clip max-md:mx-3 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1460" data-component="image" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                                      </yt-img-shadow>
                                      {" "}
                                    </ytmusic-thumbnail-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col max-md:h-[4.8875rem] 2xl:h-[4.2875rem]" data-cid="n1461">
                                  <div className="box-content h-[2.1rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n1462">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1463">
                                      <a className="box-content inline-block cursor-pointer hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1464" data-component="link" dir="auto" href="/playlist?list=PLv5AGjSz3ZMQGyjoRDaqqpOkaw-MVOFbR">
                                        Huntr/x e outros K-pops 💜🩷🩵
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content flex mt-[0.1875rem] items-center" data-cid="n1465">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[1.05rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 max-md:h-[2.1rem] 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1466">
                                      <a className="box-content inline-block cursor-pointer 2xl:hidden hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1467" data-component="link" href="/channel/UCcq6rYqeN9IIOAG-5mPdVdQ">
                                        Tamirys Serrão
                                      </a>
                                      <span className="box-content inline 2xl:hidden" data-cid="n1468">
                                        {" • "}
                                      </span>
                                      <span className="box-content inline 2xl:hidden" data-cid="n1469">
                                        3.9M views
                                      </span>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n1470" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 block align-top max-md:w-40 2xl:w-[224.7px]" data-cid="n1471" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px] hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1472" href="/playlist?list=PL9h5Hzfeba6K3HE6AnGmuRUz_XprE7-IY" title="Dope Tracks">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1473">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1474" id="image">
                                      <img className="box-content w-full h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1475" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1476" id="ripple">
                                    {" "}
                                    <div className="box-content w-45 h-full block absolute top-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1477" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1478" id="thumbnail-corner-overlay" title="Frank ">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content flex mt-2 flex-col" data-cid="n1479">
                                  <div className="box-content max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:max-h-[2.4rem]" data-cid="n1480">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1481">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1482" dir="auto" href="/playlist?list=PL9h5Hzfeba6K3HE6AnGmuRUz_XprE7-IY">
                                        Dope Tracks
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content flex mt-[0.1875rem] items-center" data-cid="n1483">
                                    {" "}
                                    <yt-formatted-string class="box-content max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1484">
                                      <a className="box-content inline-block cursor-pointer 2xl:hidden hover:underline focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n1485" href="/channel/UCh0Troz7imH-JrXV-Mny8rg">
                                        {"Frank "}
                                      </a>
                                      <span className="box-content inline 2xl:hidden" data-cid="n1486">
                                        {" • "}
                                      </span>
                                      <span className="box-content inline 2xl:hidden" data-cid="n1487">
                                        698K views
                                      </span>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n1488" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                            </div>
                            {" "}
                          </ytmusic-carousel>
                          {" "}
                        </div>
                        {" "}
                      </ytmusic-carousel-shelf-renderer>
                      <ytmusic-carousel-shelf-renderer class="box-content h-[22.3375rem] block mb-6 max-md:h-[20.6875rem] max-md:mb-4 md:max-lg:h-[21.3375rem] 2xl:h-91.5" data-cid="n1489">
                        <div className="box-content block" data-cid="n1490">
                          <div className="box-content flex max-w-249 mx-26.5 pt-8 justify-between gap-6 max-md:max-w-[21.4375rem] max-md:mx-4 max-lg:pt-4 max-md:gap-2 md:max-lg:max-w-143 md:max-lg:mx-15.5 2xl:max-w-367" data-cid="n1491" id="header-group">
                            <ytmusic-carousel-shelf-basic-header-renderer class="box-content h-9 flex items-center grow max-md:h-[1.8rem] 2xl:h-13.5" data-cid="n1492">
                              {" "}
                              <div className="box-content w-full block" data-cid="n1493" id="content-group">
                                {" "}
                                <div className="box-content flex justify-between items-end gap-2" data-cid="n1494" id="details">
                                  <yt-formatted-string class="box-content h-[2.1rem] max-w-140 max-h-[4.2rem] overflow-hidden [font-family:'YouTube_Sans',_Roboto,_'Noto_Naskh_Arabic_UI',_Arial,_sans-serif] text-[1.75rem] font-bold leading-[2.125rem] line-clamp-2 max-lg:h-[1.8rem] max-lg:max-w-100 max-lg:max-h-[3.6rem] max-lg:text-2xl max-lg:leading-[1.8125rem] 2xl:h-13.5 2xl:max-w-200 2xl:max-h-27 2xl:text-[2.8125rem] 2xl:leading-13.5" data-cid="n1495" aria-level="2" role="heading">
                                    Feeling happy
                                  </yt-formatted-string>
                                  <div className="hidden 2xl:box-content 2xl:flex 2xl:items-center" data-cid="n1496" id="button-group">
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:block" data-cid="n1497" id="more-content-button">
                                      <yt-button-renderer class="hidden 2xl:box-content 2xl:inline-block" data-cid="n1498">
                                        <yt-button-shape class="hidden 2xl:box-content 2xl:flex 2xl:grow 2xl:basis-[1e-09px]" data-cid="n1499">
                                          <button className="hidden 2xl:h-9 2xl:border 2xl:border-solid 2xl:border-border 2xl:flex 2xl:relative 2xl:min-w-0 2xl:px-[0.9375rem] 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:grow 2xl:basis-[1e-09px] 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:whitespace-nowrap 2xl:text-nowrap 2xl:cursor-pointer" data-cid="n1500" aria-label="Play all">
                                            <div className="hidden 2xl:box-content 2xl:block 2xl:overflow-hidden" data-cid="n1501">
                                              <span className="hidden 2xl:box-content 2xl:inline" data-cid="n1502" role="text">
                                                Play all
                                              </span>
                                            </div>
                                            <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-[4.8125rem] 2xl:h-8.5 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n1503" aria-hidden="true" />
                                          </button>
                                        </yt-button-shape>
                                      </yt-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </ytmusic-carousel-shelf-basic-header-renderer>
                            {" "}
                            <div className="box-content flex items-end gap-4 max-md:gap-2 2xl:hidden" data-cid="n1504">
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative opacity-40 p-2 rounded-[50%] text-muted-foreground text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n1505" disabled id="previous-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center pointer-events-none" data-cid="n1506" data-component="button" aria-label="Previous" disabled id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle pointer-events-none" data-cid="n1507">
                                    <span className="box-content flex justify-center items-center pointer-events-none" data-cid="n1508">
                                      <div className="box-content block pointer-events-none" data-cid="n1509">
                                        <Icon12 cid={"n1510"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n1511" id="interaction" />
                              </yt-icon-button>
                              {" "}
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative p-2 rounded-[50%] text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n1512" id="next-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center cursor-pointer" data-cid="n1513" data-component="button" aria-label="Next" id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle" data-cid="n1514">
                                    <span className="box-content flex justify-center items-center" data-cid="n1515">
                                      <div className="box-content block" data-cid="n1516">
                                        <Icon17 cid={"n1517"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n1518" id="interaction" />
                              </yt-icon-button>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <ytmusic-carousel class="box-content h-[15.5875rem] block relative z-0 mt-4 mb-6 overflow-hidden max-md:h-[15.3875rem] 2xl:h-60" data-cid="n1519" id="ytmusic-carousel">
                            <div className="box-content w-249 h-full grid relative mx-26.5 gap-y-4 gap-x-6 grid-cols-[180px_180px_180px_180px_180px_180px_180px_180px] grid-rows-[249.4px] [grid-auto-flow:column] overflow-x-scroll overflow-y-hidden whitespace-nowrap text-nowrap [list-style-type:disc] list-outside max-md:w-[23.4375rem] max-lg:gap-x-4 max-md:grid-cols-[176px_160px_160px_160px_160px_160px_160px_176px] max-md:grid-rows-[246.2px] max-lg:mx-0 md:max-lg:w-174 md:max-lg:grid-cols-[236px_180px_180px_180px_180px_180px_180px_236px] 2xl:w-367 2xl:grid-rows-[48px_48px_48px_48px] 2xl:grid-cols-3" data-cid="n1520" id="items">
                              <ytmusic-responsive-list-item-renderer class="hidden 2xl:box-content 2xl:h-12 2xl:flex 2xl:relative 2xl:px-2 2xl:items-center 2xl:align-top" data-cid="n1521" role="listitem">
                                {" "}
                                <div className="hidden 2xl:box-content 2xl:w-12 2xl:h-full 2xl:block 2xl:relative 2xl:mr-4 2xl:rounded-xs 2xl:shrink-0 2xl:overflow-hidden" data-cid="n1522">
                                  <ytmusic-thumbnail-renderer class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:rounded-sm 2xl:overflow-hidden" data-cid="n1523">
                                    <yt-img-shadow class="hidden 2xl:box-content 2xl:flex 2xl:items-center 2xl:shrink-0" data-cid="n1524" id="image">
                                      <img className="hidden 2xl:box-content 2xl:w-full 2xl:h-12 2xl:block 2xl:max-w-full 2xl:overflow-clip 2xl:object-contain" data-cid="n1525" alt="" id="img" src="/assets/cloned/images/f05e94cbd63b.jpg" width="56" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:opacity-[1e-06]" data-cid="n1526">
                                    <ytmusic-background-overlay-renderer class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0" data-cid="n1527" id="background" />
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:w-12 2xl:h-full 2xl:flex 2xl:absolute 2xl:top-0 2xl:left-0 2xl:justify-center 2xl:items-center" data-cid="n1528" id="content">
                                      <ytmusic-play-button-renderer class="hidden 2xl:box-content 2xl:block 2xl:relative" data-cid="n1529" aria-disabled="false" aria-label="Play Hootie Frutti" id="play-button" role="button">
                                        <div className="hidden 2xl:box-content 2xl:w-8 2xl:h-8 2xl:flex 2xl:rounded-[50%] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden 2xl:cursor-pointer" data-cid="n1530">
                                          {" "}
                                          <yt-icon class="hidden 2xl:box-content 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n1531">
                                            <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n1532">
                                              <div className="hidden 2xl:box-content 2xl:block" data-cid="n1533">
                                                <Icon15 cid={"n1534"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                </div>
                                {" "}
                                <div className="hidden 2xl:box-content 2xl:h-[2.5875rem] 2xl:flex 2xl:flex-wrap 2xl:items-center 2xl:flex-1 2xl:overflow-hidden" data-cid="n1535">
                                  <div className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:mb-[0.1875rem] 2xl:justify-between 2xl:grow-[6] 2xl:basis-full 2xl:overflow-hidden" data-cid="n1536">
                                    <yt-formatted-string class="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:overflow-hidden 2xl:text-base 2xl:font-medium 2xl:leading-[1.1875rem] 2xl:whitespace-pre" data-cid="n1537" title="Hootie Frutti">
                                      <a className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:block 2xl:-mr-[0.1rem] 2xl:pr-[0.1rem] 2xl:overflow-hidden 2xl:cursor-pointer" data-cid="n1538" href={"/watch?v=kwH2nYwuFdA&list=RDAMVMkwH2nYwuFdA"}>
                                        Hootie Frutti
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="hidden 2xl:box-content 2xl:flex 2xl:z-1 2xl:items-center 2xl:grow-[9] 2xl:basis-[1px] 2xl:overflow-hidden" data-cid="n1539">
                                    <div className="hidden 2xl:box-content 2xl:flex 2xl:min-w-0 2xl:max-w-[max-content] 2xl:items-center 2xl:flex-1 2xl:text-color-003 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n1540">
                                      <yt-formatted-string class="hidden 2xl:box-content 2xl:flex 2xl:min-w-0 2xl:flex-1 2xl:overflow-hidden 2xl:whitespace-pre" data-cid="n1541" aria-label="KATSEYE • 52 million plays" title="KATSEYE • 52M plays">
                                        <a className="hidden 2xl:box-content 2xl:block 2xl:-mr-[0.1rem] 2xl:pr-[0.1rem] 2xl:cursor-pointer" data-cid="n1542" href="/channel/UCX9kfYB9t0tnd6DYUC2iuKg">
                                          KATSEYE
                                        </a>
                                        <span className="hidden 2xl:box-content 2xl:block" data-cid="n1543">
                                          {" • "}
                                        </span>
                                        <span className="hidden 2xl:box-content 2xl:block 2xl:overflow-hidden" data-cid="n1544">
                                          52M plays
                                        </span>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:flex 2xl:min-w-0 2xl:max-w-[max-content] 2xl:ml-1 2xl:items-center 2xl:flex-1 2xl:text-color-003 2xl:text-base 2xl:leading-[1.1875rem] before:content-['•'] before:block before:w-[0.3125rem] before:h-[1.2rem] before:mr-1 before:text-color-003 before:text-base before:leading-[1.1875rem] max-lg:before:hidden" data-cid="n1545">
                                      <yt-formatted-string class="hidden 2xl:box-content 2xl:flex 2xl:min-w-0 2xl:flex-1 2xl:overflow-hidden 2xl:whitespace-pre" data-cid="n1546" title="WILD">
                                        <a className="hidden 2xl:box-content 2xl:block 2xl:-mr-[0.1rem] 2xl:pr-[0.1rem] 2xl:overflow-hidden 2xl:cursor-pointer" data-cid="n1547" href="/browse/MPREb_vb7fvP4nHTS">
                                          WILD
                                        </a>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                                <ytmusic-menu-renderer class="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:flex 2xl:ml-4 2xl:items-center 2xl:basis-0 2xl:overflow-hidden" data-cid="n1548" aria-label="Action menu">
                                  <div className="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:flex 2xl:overflow-hidden" data-cid="n1549" id="top-level-buttons">
                                    {" "}
                                    <ytmusic-like-button-renderer class="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:block 2xl:mr-2 2xl:overflow-hidden" data-cid="n1550">
                                      <yt-button-shape class="hidden 2xl:box-content 2xl:inline-block 2xl:opacity-[1e-06] 2xl:grow 2xl:basis-[1e-09px]" data-cid="n1551" id="button-shape-like">
                                        {" "}
                                        <button className="hidden 2xl:w-9 2xl:h-9 2xl:flex 2xl:relative 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:shrink-0 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" data-cid="n1552" aria-label="Like" aria-pressed="false">
                                          <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n1553" aria-hidden="true">
                                            <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n1554">
                                              <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n1555">
                                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n1556">
                                                  <Icon18 cid={"n1557"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n1558" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                      <yt-button-shape class="hidden 2xl:box-content 2xl:inline-block 2xl:opacity-[1e-06] 2xl:mr-2 2xl:grow 2xl:basis-[1e-09px]" data-cid="n1559" id="button-shape-dislike">
                                        {" "}
                                        <button className="hidden 2xl:w-9 2xl:h-9 2xl:flex 2xl:relative 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:shrink-0 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" data-cid="n1560" aria-label="Dislike" aria-pressed="false">
                                          <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n1561" aria-hidden="true">
                                            <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n1562">
                                              <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n1563">
                                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n1564">
                                                  <Icon19 cid={"n1565"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n1566" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-like-button-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <yt-button-shape class="hidden 2xl:box-content 2xl:flex 2xl:opacity-[1e-06] 2xl:shrink-0" data-cid="n1567" id="button-shape">
                                    <button className="hidden 2xl:basis-full 2xl:shrink-0 2xl:h-9 2xl:flex 2xl:relative 2xl:min-w-0 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" data-cid="n1568" aria-label="Action menu">
                                      <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n1569" aria-hidden="true">
                                        <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n1570">
                                          <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n1571">
                                            <div className="hidden 2xl:box-content 2xl:block" data-cid="n1572">
                                              <Icon16 cid={"n1573"} />
                                            </div>
                                          </span>
                                        </span>
                                      </div>
                                      <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n1574" aria-hidden="true" />
                                    </button>
                                  </yt-button-shape>
                                  {" "}
                                </ytmusic-menu-renderer>
                                {" "}
                              </ytmusic-responsive-list-item-renderer>
                              <ytmusic-responsive-list-item-renderer class="hidden 2xl:box-content 2xl:h-12 2xl:flex 2xl:relative 2xl:px-2 2xl:items-center 2xl:align-top" data-cid="n1575" role="listitem">
                                {" "}
                                <div className="hidden 2xl:box-content 2xl:w-12 2xl:h-full 2xl:block 2xl:relative 2xl:mr-4 2xl:rounded-xs 2xl:shrink-0 2xl:overflow-hidden" data-cid="n1576">
                                  <ytmusic-thumbnail-renderer class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:rounded-sm 2xl:overflow-hidden" data-cid="n1577">
                                    <yt-img-shadow class="hidden 2xl:box-content 2xl:flex 2xl:items-center 2xl:shrink-0" data-cid="n1578" id="image">
                                      <img className="hidden 2xl:box-content 2xl:w-full 2xl:h-12 2xl:block 2xl:max-w-full 2xl:overflow-clip 2xl:object-contain" data-cid="n1579" alt="" id="img" src="/assets/cloned/images/b973c788e46a.jpg" width="56" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:opacity-[1e-06]" data-cid="n1580">
                                    <ytmusic-background-overlay-renderer class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0" data-cid="n1581" id="background" />
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:w-12 2xl:h-full 2xl:flex 2xl:absolute 2xl:top-0 2xl:left-0 2xl:justify-center 2xl:items-center" data-cid="n1582" id="content">
                                      <ytmusic-play-button-renderer class="hidden 2xl:box-content 2xl:block 2xl:relative" data-cid="n1583" aria-disabled="false" aria-label="Play Contraband 2.5" id="play-button" role="button">
                                        <div className="hidden 2xl:box-content 2xl:w-8 2xl:h-8 2xl:flex 2xl:rounded-[50%] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden 2xl:cursor-pointer" data-cid="n1584">
                                          {" "}
                                          <yt-icon class="hidden 2xl:box-content 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n1585">
                                            <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n1586">
                                              <div className="hidden 2xl:box-content 2xl:block" data-cid="n1587">
                                                <Icon15 cid={"n1588"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                </div>
                                {" "}
                                <div className="hidden 2xl:box-content 2xl:h-[2.5875rem] 2xl:flex 2xl:flex-wrap 2xl:items-center 2xl:flex-1 2xl:overflow-hidden" data-cid="n1589">
                                  <div className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:mb-[0.1875rem] 2xl:justify-between 2xl:grow-[6] 2xl:basis-full 2xl:overflow-hidden" data-cid="n1590">
                                    <yt-formatted-string class="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:overflow-hidden 2xl:text-base 2xl:font-medium 2xl:leading-[1.1875rem] 2xl:whitespace-pre" data-cid="n1591" title="Contraband 2.5">
                                      <a className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:block 2xl:-mr-[0.1rem] 2xl:pr-[0.1rem] 2xl:overflow-hidden 2xl:cursor-pointer" data-cid="n1592" href={"/watch?v=TLspNd3OwUw&list=RDAMVMTLspNd3OwUw"}>
                                        Contraband 2.5
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="hidden 2xl:box-content 2xl:flex 2xl:items-center" data-cid="n1593" id="stacked-layout-badges">
                                    <ytmusic-inline-badge-renderer class="hidden 2xl:box-content 2xl:w-4 2xl:h-4 2xl:block" data-cid="n1594">
                                      <yt-icon class="hidden 2xl:box-content 2xl:block 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle 2xl:text-color-003" data-cid="n1595" aria-label="Explicit" title="Explicit">
                                        <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n1596">
                                          <div className="hidden 2xl:box-content 2xl:block" data-cid="n1597">
                                            <Icon20 cid={"n1598"} />
                                          </div>
                                        </span>
                                      </yt-icon>
                                      {" "}
                                    </ytmusic-inline-badge-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:z-1 2xl:items-center 2xl:grow-[9] 2xl:basis-[1px] 2xl:overflow-hidden" data-cid="n1599">
                                    <div className="hidden 2xl:box-content 2xl:flex 2xl:min-w-0 2xl:max-w-[max-content] 2xl:ml-1 2xl:items-center 2xl:flex-1 2xl:text-color-003 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n1600">
                                      <yt-formatted-string class="hidden 2xl:box-content 2xl:flex 2xl:min-w-0 2xl:flex-1 2xl:overflow-hidden 2xl:whitespace-pre" data-cid="n1601" aria-label="Pooh Shiesty • 259 thousand plays" title="Pooh Shiesty • 259K plays">
                                        <a className="hidden 2xl:box-content 2xl:block 2xl:-mr-[0.1rem] 2xl:pr-[0.1rem] 2xl:cursor-pointer" data-cid="n1602" href="/channel/UCHP-7P6ChK4-jiFoz62RcUg">
                                          Pooh Shiesty
                                        </a>
                                        <span className="hidden 2xl:box-content 2xl:block" data-cid="n1603">
                                          {" • "}
                                        </span>
                                        <span className="hidden 2xl:box-content 2xl:block 2xl:overflow-hidden" data-cid="n1604">
                                          259K plays
                                        </span>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:min-w-0 2xl:max-w-[max-content] 2xl:ml-1 2xl:items-center 2xl:flex-1 2xl:text-color-003 2xl:text-base 2xl:leading-[1.1875rem] before:content-['•'] before:block before:w-[0.3125rem] before:h-[1.2rem] before:mr-1 before:text-color-003 before:text-base before:leading-[1.1875rem] max-lg:before:hidden" data-cid="n1605">
                                      <yt-formatted-string class="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:min-w-0 2xl:flex-1 2xl:overflow-hidden 2xl:whitespace-pre" data-cid="n1606" title="All Eyes on Shiest">
                                        <a className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:block 2xl:-mr-[0.1rem] 2xl:pr-[0.1rem] 2xl:overflow-hidden 2xl:cursor-pointer" data-cid="n1607" href="/browse/MPREb_fylklEw93Dp">
                                          All Eyes on Shiest
                                        </a>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                                <ytmusic-menu-renderer class="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:flex 2xl:ml-4 2xl:items-center 2xl:basis-0 2xl:overflow-hidden" data-cid="n1608" aria-label="Action menu">
                                  <div className="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:flex 2xl:overflow-hidden" data-cid="n1609" id="top-level-buttons">
                                    {" "}
                                    <ytmusic-like-button-renderer class="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:block 2xl:mr-2 2xl:overflow-hidden" data-cid="n1610">
                                      <yt-button-shape class="hidden 2xl:box-content 2xl:inline-block 2xl:opacity-[1e-06] 2xl:grow 2xl:basis-[1e-09px]" data-cid="n1611" id="button-shape-like">
                                        {" "}
                                        <button className="hidden 2xl:w-9 2xl:h-9 2xl:flex 2xl:relative 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:shrink-0 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" data-cid="n1612" aria-label="Like" aria-pressed="false">
                                          <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n1613" aria-hidden="true">
                                            <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n1614">
                                              <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n1615">
                                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n1616">
                                                  <Icon18 cid={"n1617"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n1618" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                      <yt-button-shape class="hidden 2xl:box-content 2xl:inline-block 2xl:opacity-[1e-06] 2xl:mr-2 2xl:grow 2xl:basis-[1e-09px]" data-cid="n1619" id="button-shape-dislike">
                                        {" "}
                                        <button className="hidden 2xl:w-9 2xl:h-9 2xl:flex 2xl:relative 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:shrink-0 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" data-cid="n1620" aria-label="Dislike" aria-pressed="false">
                                          <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n1621" aria-hidden="true">
                                            <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n1622">
                                              <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n1623">
                                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n1624">
                                                  <Icon19 cid={"n1625"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n1626" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-like-button-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <yt-button-shape class="hidden 2xl:box-content 2xl:flex 2xl:opacity-[1e-06] 2xl:shrink-0" data-cid="n1627" id="button-shape">
                                    <button className="hidden 2xl:basis-full 2xl:shrink-0 2xl:h-9 2xl:flex 2xl:relative 2xl:min-w-0 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" data-cid="n1628" aria-label="Action menu">
                                      <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n1629" aria-hidden="true">
                                        <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n1630">
                                          <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n1631">
                                            <div className="hidden 2xl:box-content 2xl:block" data-cid="n1632">
                                              <Icon16 cid={"n1633"} />
                                            </div>
                                          </span>
                                        </span>
                                      </div>
                                      <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n1634" aria-hidden="true" />
                                    </button>
                                  </yt-button-shape>
                                  {" "}
                                </ytmusic-menu-renderer>
                                {" "}
                              </ytmusic-responsive-list-item-renderer>
                              <ytmusic-responsive-list-item-renderer class="hidden 2xl:box-content 2xl:flex 2xl:relative 2xl:px-2 2xl:items-center 2xl:align-top" data-cid="n1635" role="listitem">
                                {" "}
                                <div className="hidden 2xl:box-content 2xl:w-12 2xl:h-full 2xl:block 2xl:relative 2xl:mr-4 2xl:rounded-xs 2xl:shrink-0 2xl:overflow-hidden" data-cid="n1636">
                                  <ytmusic-thumbnail-renderer class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:rounded-sm 2xl:overflow-hidden" data-cid="n1637">
                                    <yt-img-shadow class="hidden 2xl:box-content 2xl:flex 2xl:items-center 2xl:shrink-0" data-cid="n1638" id="image">
                                      <img className="hidden 2xl:box-content 2xl:w-full 2xl:h-12 2xl:block 2xl:max-w-full 2xl:overflow-clip 2xl:object-contain" data-cid="n1639" alt="" id="img" src="/assets/cloned/images/2d0e9b62cc54.jpg" width="56" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:opacity-[1e-06]" data-cid="n1640">
                                    <ytmusic-background-overlay-renderer class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0" data-cid="n1641" id="background" />
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:w-12 2xl:h-full 2xl:flex 2xl:absolute 2xl:top-0 2xl:left-0 2xl:justify-center 2xl:items-center" data-cid="n1642" id="content">
                                      <ytmusic-play-button-renderer class="hidden 2xl:box-content 2xl:block 2xl:relative" data-cid="n1643" aria-disabled="false" aria-label="Play Butterflies" id="play-button" role="button">
                                        <div className="hidden 2xl:box-content 2xl:w-8 2xl:h-8 2xl:flex 2xl:rounded-[50%] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden 2xl:cursor-pointer" data-cid="n1644">
                                          {" "}
                                          <yt-icon class="hidden 2xl:box-content 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n1645">
                                            <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n1646">
                                              <div className="hidden 2xl:box-content 2xl:block" data-cid="n1647">
                                                <Icon15 cid={"n1648"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                </div>
                                {" "}
                                <div className="hidden 2xl:box-content 2xl:flex 2xl:flex-wrap 2xl:items-center 2xl:flex-1 2xl:overflow-hidden" data-cid="n1649">
                                  <div className="hidden 2xl:box-content 2xl:flex 2xl:mb-[0.1875rem] 2xl:justify-between 2xl:grow-[6] 2xl:basis-full 2xl:overflow-hidden" data-cid="n1650">
                                    <yt-formatted-string class="hidden 2xl:box-content 2xl:flex 2xl:overflow-hidden 2xl:text-base 2xl:font-medium 2xl:leading-[1.1875rem] 2xl:whitespace-pre" data-cid="n1651" title="Butterflies">
                                      <a className="hidden 2xl:box-content 2xl:block 2xl:-mr-[0.1rem] 2xl:pr-[0.1rem] 2xl:overflow-hidden 2xl:cursor-pointer" data-cid="n1652" href={"/watch?v=Xq8OEjvTxMw&list=RDAMVMXq8OEjvTxMw"}>
                                        Butterflies
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="hidden 2xl:box-content 2xl:flex 2xl:z-1 2xl:items-center 2xl:grow-[9] 2xl:basis-[1px] 2xl:overflow-hidden" data-cid="n1653">
                                    <div className="hidden 2xl:box-content 2xl:flex 2xl:min-w-0 2xl:max-w-[max-content] 2xl:items-center 2xl:flex-1 2xl:text-color-003 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n1654">
                                      <yt-formatted-string class="hidden 2xl:box-content 2xl:flex 2xl:min-w-0 2xl:flex-1 2xl:overflow-hidden 2xl:whitespace-pre" data-cid="n1655" aria-label="Mac Miller • 859 thousand plays" title="Mac Miller • 859K plays">
                                        <a className="hidden 2xl:box-content 2xl:block 2xl:-mr-[0.1rem] 2xl:pr-[0.1rem] 2xl:cursor-pointer" data-cid="n1656" href="/channel/UC52ZqHVQz5OoGhvbWiRal6g">
                                          Mac Miller
                                        </a>
                                        <span className="hidden 2xl:box-content 2xl:block" data-cid="n1657">
                                          {" • "}
                                        </span>
                                        <span className="hidden 2xl:box-content 2xl:block 2xl:overflow-hidden" data-cid="n1658">
                                          859K plays
                                        </span>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:flex 2xl:min-w-0 2xl:max-w-[max-content] 2xl:ml-1 2xl:items-center 2xl:flex-1 2xl:text-color-003 2xl:text-base 2xl:leading-[1.1875rem] before:content-['•'] before:block before:w-[0.3125rem] before:h-[1.2rem] before:mr-1 before:text-color-003 before:text-base before:leading-[1.1875rem] max-lg:before:hidden" data-cid="n1659">
                                      <yt-formatted-string class="hidden 2xl:box-content 2xl:flex 2xl:min-w-0 2xl:flex-1 2xl:overflow-hidden 2xl:whitespace-pre" data-cid="n1660" title="Butterflies">
                                        <a className="hidden 2xl:box-content 2xl:block 2xl:-mr-[0.1rem] 2xl:pr-[0.1rem] 2xl:overflow-hidden 2xl:cursor-pointer" data-cid="n1661" href="/browse/MPREb_tbtGhsl0aYE">
                                          Butterflies
                                        </a>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                                <ytmusic-menu-renderer class="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:flex 2xl:ml-4 2xl:items-center 2xl:basis-0 2xl:overflow-hidden" data-cid="n1662" aria-label="Action menu">
                                  <div className="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:flex 2xl:overflow-hidden" data-cid="n1663" id="top-level-buttons">
                                    {" "}
                                    <ytmusic-like-button-renderer class="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:block 2xl:mr-2 2xl:overflow-hidden" data-cid="n1664">
                                      <yt-button-shape class="hidden 2xl:box-content 2xl:inline-block 2xl:opacity-[1e-06] 2xl:grow 2xl:basis-[1e-09px]" data-cid="n1665" id="button-shape-like">
                                        {" "}
                                        <button className="hidden 2xl:w-9 2xl:h-9 2xl:flex 2xl:relative 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:shrink-0 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" data-cid="n1666" aria-label="Like" aria-pressed="false">
                                          <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n1667" aria-hidden="true">
                                            <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n1668">
                                              <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n1669">
                                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n1670">
                                                  <Icon18 cid={"n1671"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n1672" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                      <yt-button-shape class="hidden 2xl:box-content 2xl:inline-block 2xl:opacity-[1e-06] 2xl:mr-2 2xl:grow 2xl:basis-[1e-09px]" data-cid="n1673" id="button-shape-dislike">
                                        {" "}
                                        <button className="hidden 2xl:w-9 2xl:h-9 2xl:flex 2xl:relative 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:shrink-0 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" data-cid="n1674" aria-label="Dislike" aria-pressed="false">
                                          <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n1675" aria-hidden="true">
                                            <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n1676">
                                              <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n1677">
                                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n1678">
                                                  <Icon19 cid={"n1679"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n1680" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-like-button-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <yt-button-shape class="hidden 2xl:box-content 2xl:flex 2xl:opacity-[1e-06] 2xl:shrink-0" data-cid="n1681" id="button-shape">
                                    <button className="hidden 2xl:basis-full 2xl:shrink-0 2xl:h-9 2xl:flex 2xl:relative 2xl:min-w-0 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" data-cid="n1682" aria-label="Action menu">
                                      <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n1683" aria-hidden="true">
                                        <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n1684">
                                          <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n1685">
                                            <div className="hidden 2xl:box-content 2xl:block" data-cid="n1686">
                                              <Icon16 cid={"n1687"} />
                                            </div>
                                          </span>
                                        </span>
                                      </div>
                                      <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n1688" aria-hidden="true" />
                                    </button>
                                  </yt-button-shape>
                                  {" "}
                                </ytmusic-menu-renderer>
                                {" "}
                              </ytmusic-responsive-list-item-renderer>
                              {MediaTile_data.map((d, i) => <MediaTile key={i} d={d} cids={MediaTile_cids[i]} styles={MediaTile_styles[i]} />)}
                              <ytmusic-responsive-list-item-renderer class="hidden 2xl:box-content 2xl:w-[457.3px] 2xl:h-12 2xl:flex 2xl:relative 2xl:px-2 2xl:items-center 2xl:align-top" data-cid="n1989" role="listitem">
                                {" "}
                                <div className="hidden 2xl:box-content 2xl:w-12 2xl:h-full 2xl:block 2xl:relative 2xl:mr-4 2xl:rounded-xs 2xl:shrink-0 2xl:overflow-hidden" data-cid="n1990">
                                  <ytmusic-thumbnail-renderer class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:rounded-sm 2xl:overflow-hidden" data-cid="n1991">
                                    <yt-img-shadow class="hidden 2xl:box-content 2xl:flex 2xl:items-center 2xl:shrink-0" data-cid="n1992" id="image">
                                      <img className="hidden 2xl:box-content 2xl:w-full 2xl:h-12 2xl:block 2xl:max-w-full 2xl:overflow-clip 2xl:object-contain" data-cid="n1993" alt="" id="img" src="/assets/cloned/images/07816196cf1f.jpg" width="56" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:opacity-[1e-06]" data-cid="n1994">
                                    <ytmusic-background-overlay-renderer class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0" data-cid="n1995" id="background" />
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:w-12 2xl:h-full 2xl:flex 2xl:absolute 2xl:top-0 2xl:left-0 2xl:justify-center 2xl:items-center" data-cid="n1996" id="content">
                                      <ytmusic-play-button-renderer class="hidden 2xl:box-content 2xl:block 2xl:relative" data-cid="n1997" aria-disabled="false" aria-label="Play SERIOUS — THE COMMISSION" id="play-button" role="button">
                                        <div className="hidden 2xl:box-content 2xl:w-8 2xl:h-8 2xl:flex 2xl:rounded-[50%] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden 2xl:cursor-pointer" data-cid="n1998">
                                          {" "}
                                          <yt-icon class="hidden 2xl:box-content 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n1999">
                                            <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n2000">
                                              <div className="hidden 2xl:box-content 2xl:block" data-cid="n2001">
                                                <Icon15 cid={"n2002"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                </div>
                                {" "}
                                <div className="hidden 2xl:box-content 2xl:h-[2.5875rem] 2xl:flex 2xl:flex-wrap 2xl:items-center 2xl:flex-1 2xl:overflow-hidden" data-cid="n2003">
                                  <div className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:mb-[0.1875rem] 2xl:justify-between 2xl:grow-[6] 2xl:basis-full 2xl:overflow-hidden" data-cid="n2004">
                                    <yt-formatted-string class="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:overflow-hidden 2xl:text-base 2xl:font-medium 2xl:leading-[1.1875rem] 2xl:whitespace-pre" data-cid="n2005" title="SERIOUS — THE COMMISSION">
                                      <a className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:block 2xl:-mr-[0.1rem] 2xl:pr-[0.1rem] 2xl:overflow-hidden 2xl:cursor-pointer" data-cid="n2006" href={"/watch?v=r95jr7fewQs&list=RDAMVMr95jr7fewQs"}>
                                        SERIOUS — THE COMMISSION
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="hidden 2xl:box-content 2xl:flex 2xl:items-center" data-cid="n2007" id="stacked-layout-badges">
                                    <ytmusic-inline-badge-renderer class="hidden 2xl:box-content 2xl:w-4 2xl:h-4 2xl:block" data-cid="n2008">
                                      <yt-icon class="hidden 2xl:box-content 2xl:block 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle 2xl:text-color-003" data-cid="n2009" aria-label="Explicit" title="Explicit">
                                        <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n2010">
                                          <div className="hidden 2xl:box-content 2xl:block" data-cid="n2011">
                                            <Icon20 cid={"n2012"} />
                                          </div>
                                        </span>
                                      </yt-icon>
                                      {" "}
                                    </ytmusic-inline-badge-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:z-1 2xl:items-center 2xl:grow-[9] 2xl:basis-[1px] 2xl:overflow-hidden" data-cid="n2013">
                                    <div className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:min-w-0 2xl:max-w-[max-content] 2xl:ml-1 2xl:items-center 2xl:flex-1 2xl:text-color-003 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n2014" aria-label={"YTB Fatt & Moneybagg Yo • 807 thousand plays"} role="text">
                                      <yt-formatted-string class="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:min-w-0 2xl:flex-1 2xl:overflow-hidden 2xl:whitespace-pre" data-cid="n2015" aria-hidden="true" aria-label={"YTB Fatt & Moneybagg Yo • 807 thousand plays"} title={"YTB Fatt & Moneybagg Yo • 807K plays"}>
                                        <span className="hidden 2xl:box-content 2xl:block" data-cid="n2016">
                                          {"YTB Fatt & Moneybagg Yo"}
                                        </span>
                                        <span className="hidden 2xl:box-content 2xl:block" data-cid="n2017">
                                          {" • "}
                                        </span>
                                        <span className="hidden 2xl:box-content 2xl:block 2xl:overflow-hidden" data-cid="n2018">
                                          807K plays
                                        </span>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:flex 2xl:min-w-0 2xl:max-w-[max-content] 2xl:ml-1 2xl:items-center 2xl:flex-1 2xl:text-color-003 2xl:text-base 2xl:leading-[1.1875rem] before:content-['•'] before:block before:w-[0.3125rem] before:h-[1.2rem] before:mr-1 before:text-color-003 before:text-base before:leading-[1.1875rem] max-lg:before:hidden" data-cid="n2019">
                                      <yt-formatted-string class="hidden 2xl:box-content 2xl:flex 2xl:min-w-0 2xl:flex-1 2xl:overflow-hidden 2xl:whitespace-pre" data-cid="n2020" title="VERA VOLPE">
                                        <a className="hidden 2xl:box-content 2xl:block 2xl:-mr-[0.1rem] 2xl:pr-[0.1rem] 2xl:overflow-hidden 2xl:cursor-pointer" data-cid="n2021" href="/browse/MPREb_5HFtzUxLtW7">
                                          VERA VOLPE
                                        </a>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                                <ytmusic-menu-renderer class="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:flex 2xl:ml-4 2xl:items-center 2xl:basis-0 2xl:overflow-hidden" data-cid="n2022" aria-label="Action menu">
                                  <div className="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:flex 2xl:overflow-hidden" data-cid="n2023" id="top-level-buttons">
                                    {" "}
                                    <ytmusic-like-button-renderer class="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:block 2xl:mr-2 2xl:overflow-hidden" data-cid="n2024">
                                      <yt-button-shape class="hidden 2xl:box-content 2xl:inline-block 2xl:opacity-[1e-06] 2xl:grow 2xl:basis-[1e-09px]" data-cid="n2025" id="button-shape-like">
                                        {" "}
                                        <button className="hidden 2xl:w-9 2xl:h-9 2xl:flex 2xl:relative 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:shrink-0 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" data-cid="n2026" aria-label="Like" aria-pressed="false">
                                          <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n2027" aria-hidden="true">
                                            <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n2028">
                                              <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n2029">
                                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n2030">
                                                  <Icon18 cid={"n2031"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n2032" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                      <yt-button-shape class="hidden 2xl:box-content 2xl:inline-block 2xl:opacity-[1e-06] 2xl:mr-2 2xl:grow 2xl:basis-[1e-09px]" data-cid="n2033" id="button-shape-dislike">
                                        {" "}
                                        <button className="hidden 2xl:w-9 2xl:h-9 2xl:flex 2xl:relative 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:shrink-0 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" data-cid="n2034" aria-label="Dislike" aria-pressed="false">
                                          <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n2035" aria-hidden="true">
                                            <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n2036">
                                              <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n2037">
                                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n2038">
                                                  <Icon19 cid={"n2039"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n2040" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-like-button-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <yt-button-shape class="hidden 2xl:box-content 2xl:flex 2xl:opacity-[1e-06] 2xl:shrink-0" data-cid="n2041" id="button-shape">
                                    <button className="hidden 2xl:basis-full 2xl:shrink-0 2xl:h-9 2xl:flex 2xl:relative 2xl:min-w-0 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" data-cid="n2042" aria-label="Action menu">
                                      <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n2043" aria-hidden="true">
                                        <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n2044">
                                          <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n2045">
                                            <div className="hidden 2xl:box-content 2xl:block" data-cid="n2046">
                                              <Icon16 cid={"n2047"} />
                                            </div>
                                          </span>
                                        </span>
                                      </div>
                                      <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n2048" aria-hidden="true" />
                                    </button>
                                  </yt-button-shape>
                                  {" "}
                                </ytmusic-menu-renderer>
                                {" "}
                              </ytmusic-responsive-list-item-renderer>
                              <ytmusic-responsive-list-item-renderer class="hidden 2xl:box-content 2xl:w-[457.3px] 2xl:h-12 2xl:flex 2xl:relative 2xl:px-2 2xl:items-center 2xl:align-top" data-cid="n2049" role="listitem">
                                {" "}
                                <div className="hidden 2xl:box-content 2xl:w-12 2xl:h-full 2xl:block 2xl:relative 2xl:mr-4 2xl:rounded-xs 2xl:shrink-0 2xl:overflow-hidden" data-cid="n2050">
                                  <ytmusic-thumbnail-renderer class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:rounded-sm 2xl:overflow-hidden" data-cid="n2051">
                                    <yt-img-shadow class="hidden 2xl:box-content 2xl:flex 2xl:items-center 2xl:shrink-0" data-cid="n2052" id="image">
                                      <img className="hidden 2xl:box-content 2xl:w-full 2xl:h-12 2xl:block 2xl:max-w-full 2xl:overflow-clip 2xl:object-contain" data-cid="n2053" alt="" id="img" src="/assets/cloned/images/cebcaadab891.jpg" width="56" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:opacity-[1e-06]" data-cid="n2054">
                                    <ytmusic-background-overlay-renderer class="hidden 2xl:box-content 2xl:w-12 2xl:h-12 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0" data-cid="n2055" id="background" />
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:w-12 2xl:h-full 2xl:flex 2xl:absolute 2xl:top-0 2xl:left-0 2xl:justify-center 2xl:items-center" data-cid="n2056" id="content">
                                      <ytmusic-play-button-renderer class="hidden 2xl:box-content 2xl:block 2xl:relative" data-cid="n2057" aria-disabled="false" aria-label="Play Tom Cruise vs Evel Knievel" id="play-button" role="button">
                                        <div className="hidden 2xl:box-content 2xl:w-8 2xl:h-8 2xl:flex 2xl:rounded-[50%] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden 2xl:cursor-pointer" data-cid="n2058">
                                          {" "}
                                          <yt-icon class="hidden 2xl:box-content 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n2059">
                                            <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n2060">
                                              <div className="hidden 2xl:box-content 2xl:block" data-cid="n2061">
                                                <Icon15 cid={"n2062"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                </div>
                                {" "}
                                <div className="hidden 2xl:box-content 2xl:h-[2.5875rem] 2xl:flex 2xl:flex-wrap 2xl:items-center 2xl:flex-1 2xl:overflow-hidden" data-cid="n2063">
                                  <div className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:mb-[0.1875rem] 2xl:justify-between 2xl:grow-[6] 2xl:basis-full 2xl:overflow-hidden" data-cid="n2064">
                                    <yt-formatted-string class="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:overflow-hidden 2xl:text-base 2xl:font-medium 2xl:leading-[1.1875rem] 2xl:whitespace-pre" data-cid="n2065" title="Tom Cruise vs Evel Knievel">
                                      <a className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:block 2xl:-mr-[0.1rem] 2xl:pr-[0.1rem] 2xl:overflow-hidden 2xl:cursor-pointer" data-cid="n2066" href={"/watch?v=jlQXhqbbxXI&list=RDAMVMjlQXhqbbxXI"}>
                                        Tom Cruise vs Evel Knievel
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:z-1 2xl:items-center 2xl:grow-[9] 2xl:basis-[1px] 2xl:overflow-hidden" data-cid="n2067">
                                    <div className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:min-w-0 2xl:max-w-[max-content] 2xl:items-center 2xl:flex-1 2xl:text-color-003 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n2068">
                                      <yt-formatted-string class="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:min-w-0 2xl:flex-1 2xl:overflow-hidden 2xl:whitespace-pre" data-cid="n2069" aria-label="Epic Rap Battles of History • 1 million plays" title="Epic Rap Battles of History • 1M plays">
                                        <a className="hidden 2xl:box-content 2xl:block 2xl:-mr-[0.1rem] 2xl:pr-[0.1rem] 2xl:cursor-pointer" data-cid="n2070" href="/channel/UCUpnQBLY_bJsJku8Gy2_rkg">
                                          Epic Rap Battles of History
                                        </a>
                                        <span className="hidden 2xl:box-content 2xl:block" data-cid="n2071">
                                          {" • "}
                                        </span>
                                        <span className="hidden 2xl:box-content 2xl:w-0 2xl:h-[1.2rem] 2xl:block 2xl:overflow-hidden" data-cid="n2072">
                                          1M plays
                                        </span>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:min-w-0 2xl:max-w-[max-content] 2xl:ml-1 2xl:items-center 2xl:flex-1 2xl:text-color-003 2xl:text-base 2xl:leading-[1.1875rem] before:content-['•'] before:block before:w-[0.3125rem] before:h-[1.2rem] before:mr-1 before:text-color-003 before:text-base before:leading-[1.1875rem] max-lg:before:hidden" data-cid="n2073">
                                      <yt-formatted-string class="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:flex 2xl:min-w-0 2xl:flex-1 2xl:overflow-hidden 2xl:whitespace-pre" data-cid="n2074" title="Tom Cruise vs Evel Knievel">
                                        <a className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:block 2xl:-mr-[0.1rem] 2xl:pr-[0.1rem] 2xl:overflow-hidden 2xl:cursor-pointer" data-cid="n2075" href="/browse/MPREb_M0ob9BWJmG1">
                                          Tom Cruise vs Evel Knievel
                                        </a>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                                <ytmusic-menu-renderer class="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:flex 2xl:ml-4 2xl:items-center 2xl:basis-0 2xl:overflow-hidden" data-cid="n2076" aria-label="Action menu">
                                  <div className="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:flex 2xl:overflow-hidden" data-cid="n2077" id="top-level-buttons">
                                    {" "}
                                    <ytmusic-like-button-renderer class="hidden 2xl:box-content 2xl:w-0 2xl:h-9 2xl:block 2xl:mr-2 2xl:overflow-hidden" data-cid="n2078">
                                      <yt-button-shape class="hidden 2xl:box-content 2xl:inline-block 2xl:opacity-[1e-06] 2xl:grow 2xl:basis-[1e-09px]" data-cid="n2079" id="button-shape-like">
                                        {" "}
                                        <button className="hidden 2xl:w-9 2xl:h-9 2xl:flex 2xl:relative 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:shrink-0 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" data-cid="n2080" aria-label="Like" aria-pressed="false">
                                          <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n2081" aria-hidden="true">
                                            <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n2082">
                                              <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n2083">
                                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n2084">
                                                  <Icon18 cid={"n2085"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n2086" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                      <yt-button-shape class="hidden 2xl:box-content 2xl:inline-block 2xl:opacity-[1e-06] 2xl:mr-2 2xl:grow 2xl:basis-[1e-09px]" data-cid="n2087" id="button-shape-dislike">
                                        {" "}
                                        <button className="hidden 2xl:w-9 2xl:h-9 2xl:flex 2xl:relative 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:shrink-0 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" data-cid="n2088" aria-label="Dislike" aria-pressed="false">
                                          <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n2089" aria-hidden="true">
                                            <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n2090">
                                              <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n2091">
                                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n2092">
                                                  <Icon19 cid={"n2093"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n2094" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-like-button-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <yt-button-shape class="hidden 2xl:box-content 2xl:flex 2xl:opacity-[1e-06] 2xl:shrink-0" data-cid="n2095" id="button-shape">
                                    <button className="hidden 2xl:basis-full 2xl:shrink-0 2xl:h-9 2xl:flex 2xl:relative 2xl:min-w-0 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center 2xl:cursor-pointer" data-cid="n2096" aria-label="Action menu">
                                      <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n2097" aria-hidden="true">
                                        <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n2098">
                                          <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n2099">
                                            <div className="hidden 2xl:box-content 2xl:block" data-cid="n2100">
                                              <Icon16 cid={"n2101"} />
                                            </div>
                                          </span>
                                        </span>
                                      </div>
                                      <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n2102" aria-hidden="true" />
                                    </button>
                                  </yt-button-shape>
                                  {" "}
                                </ytmusic-menu-renderer>
                                {" "}
                              </ytmusic-responsive-list-item-renderer>
                              {MediaTile2_data.map((d, i) => <MediaTile2 key={i} d={d} cids={MediaTile2_cids[i]} styles={MediaTile2_styles[i]} />)}
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:hidden" data-cid="n2268" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:hidden" data-cid="n2269" data-component="link" href="/playlist?list=RDCLAK5uy_l5fqcqrL-bmWMGgd4Zot1VCpeU0tjtbLY" title="Feelin' Good in the '00s">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:hidden" data-cid="n2270">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 2xl:hidden" data-cid="n2271" id="image">
                                      <img className="box-content w-full h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:hidden" data-cid="n2272" data-component="image" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:hidden" data-cid="n2273" id="ripple">
                                    {" "}
                                    <div className="box-content w-45 h-full block absolute top-0 overflow-hidden pointer-events-none 2xl:hidden" data-cid="n2274" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:hidden" data-cid="n2275" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:hidden" data-cid="n2276">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:hidden" data-cid="n2277">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:hidden" data-cid="n2278">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap 2xl:hidden" data-cid="n2279" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_l5fqcqrL-bmWMGgd4Zot1VCpeU0tjtbLY">
                                        Feelin' Good in the '00s
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:hidden" data-cid="n2280">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:hidden" data-cid="n2281">
                                      Britney Spears, Justin Timberlake, Mariah Carey, Gwen Stefani
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block 2xl:hidden" data-cid="n2282" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                            </div>
                            {" "}
                          </ytmusic-carousel>
                          {" "}
                        </div>
                        {" "}
                      </ytmusic-carousel-shelf-renderer>
                      <ytmusic-carousel-shelf-renderer class="box-content h-[23.3125rem] block mb-6 max-md:h-[21.8125rem] max-md:mb-4 md:max-lg:h-[22.0125rem] 2xl:h-[28.0125rem]" data-cid="n2283">
                        <div className="box-content block" data-cid="n2284">
                          <div className="box-content flex max-w-249 mx-26.5 pt-8 justify-between gap-6 max-md:max-w-[21.4375rem] max-md:mx-4 max-lg:pt-4 max-md:gap-2 md:max-lg:max-w-143 md:max-lg:mx-15.5 2xl:max-w-367" data-cid="n2285" id="header-group">
                            <ytmusic-carousel-shelf-basic-header-renderer class="box-content h-[3.225rem] flex items-center grow max-lg:h-[2.925rem] 2xl:h-[4.6875rem]" data-cid="n2286">
                              {" "}
                              <div className="box-content w-full h-full block" data-cid="n2287" id="content-group">
                                <yt-formatted-string class="box-content h-4 block max-w-140 mb-0.5 overflow-hidden text-muted text-sm leading-4 uppercase whitespace-nowrap text-nowrap max-lg:max-w-100 2xl:h-[1.1875rem] 2xl:max-w-200 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n2288" title="THE HITS FROM EVERY GENRE">
                                  THE HITS FROM EVERY GENRE
                                </yt-formatted-string>
                                {" "}
                                <div className="box-content flex justify-between items-end gap-2" data-cid="n2289" id="details">
                                  <yt-formatted-string class="box-content h-[2.1rem] max-w-140 max-h-[4.2rem] overflow-hidden [font-family:'YouTube_Sans',_Roboto,_'Noto_Naskh_Arabic_UI',_Arial,_sans-serif] text-[1.75rem] font-bold leading-[2.125rem] line-clamp-2 max-lg:h-[1.8rem] max-lg:max-w-100 max-lg:max-h-[3.6rem] max-lg:text-2xl max-lg:leading-[1.8125rem] 2xl:h-13.5 2xl:max-w-200 2xl:max-h-27 2xl:text-[2.8125rem] 2xl:leading-13.5" data-cid="n2290" aria-level="2" role="heading">
                                    All-time essentials
                                  </yt-formatted-string>
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </ytmusic-carousel-shelf-basic-header-renderer>
                            {" "}
                            <div className="box-content flex items-end gap-4 max-md:gap-2" data-cid="n2291">
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative opacity-40 p-2 rounded-[50%] text-muted-foreground text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n2292" disabled id="previous-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center pointer-events-none" data-cid="n2293" data-component="button" aria-label="Previous" disabled id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle pointer-events-none" data-cid="n2294">
                                    <span className="box-content flex justify-center items-center pointer-events-none" data-cid="n2295">
                                      <div className="box-content block pointer-events-none" data-cid="n2296">
                                        <Icon12 cid={"n2297"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n2298" id="interaction" />
                              </yt-icon-button>
                              {" "}
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative p-2 rounded-[50%] text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n2299" id="next-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center cursor-pointer" data-cid="n2300" data-component="button" aria-label="Next" id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle" data-cid="n2301">
                                    <span className="box-content flex justify-center items-center" data-cid="n2302">
                                      <div className="box-content block" data-cid="n2303">
                                        <Icon17 cid={"n2304"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n2305" id="interaction" />
                              </yt-icon-button>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <ytmusic-carousel class="box-content h-[15.5875rem] block relative z-0 mt-4 mb-6 overflow-hidden max-md:h-[15.3875rem] 2xl:h-[18.825rem]" data-cid="n2306" id="ytmusic-carousel">
                            <div className="box-content w-249 h-full grid relative mx-26.5 gap-y-4 gap-x-6 grid-cols-[180px_180px_180px_180px_180px_180px_180px] grid-rows-[249.4px] [grid-auto-flow:column] overflow-x-scroll overflow-y-hidden whitespace-nowrap text-nowrap [list-style-type:disc] list-outside max-md:w-[23.4375rem] max-lg:gap-x-4 max-md:grid-cols-[176px_160px_160px_160px_160px_160px_176px] max-md:grid-rows-[246.2px] max-lg:mx-0 md:max-lg:w-174 md:max-lg:grid-cols-[236px_180px_180px_180px_180px_180px_236px] 2xl:w-367 2xl:grid-cols-[224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px] 2xl:grid-rows-[301.2px]" data-cid="n2307" id="items">
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] max-md:pl-4 md:max-lg:pl-14 2xl:w-[224.7px] 2xl:h-[18.825rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n2308" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px]" data-cid="n2309" data-component="link" href="/playlist?list=RDCLAK5uy_nmS3YoxSwVVQk9lEQJ0UX4ZCjXsW_psU8" title="Pop's Biggest Hits">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n2310">
                                    <yt-img-shadow class="box-content flex items-center shrink-0" data-cid="n2311" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem]" data-cid="n2312" data-component="image" alt="" id="img" src="/assets/cloned/images/92c47a13f484.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n2313" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none" data-cid="n2314" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px]" data-cid="n2315">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px]" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n2316" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0" data-cid="n2317" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06]" data-cid="n2318" data-component="button" aria-disabled="false" aria-label="Play Pop's Biggest Hits" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004" data-cid="n2319">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle" data-cid="n2320">
                                            <span className="box-content flex justify-center items-center" data-cid="n2321">
                                              <div className="box-content block" data-cid="n2322">
                                                <Icon21 cid={"n2323"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden" data-cid="n2324" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0" data-cid="n2325" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center" data-cid="n2326" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0" data-cid="n2327" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle" data-cid="n2328">
                                              <span className="box-content flex justify-center items-center" data-cid="n2329">
                                                <div className="box-content block" data-cid="n2330">
                                                  <Icon22 cid={"n2331"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px]" data-cid="n2332" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content h-[1.9125rem] block absolute right-[8.8375rem] bottom-2 left-2 max-md:h-[1.7rem] max-md:right-[7.8rem] 2xl:h-[2.3875rem] 2xl:right-[178.5px]" data-cid="n2333" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n2334">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n2335">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n2336">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap" data-cid="n2337" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_nmS3YoxSwVVQk9lEQJ0UX4ZCjXsW_psU8">
                                        Pop's Biggest Hits
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n2338">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n2339">
                                      Justin Bieber, Taylor Swift, Sabrina Carpenter, Bruno Mars
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n2340" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n2341" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px]" data-cid="n2342" data-component="link" href="/playlist?list=RDCLAK5uy_lc4yBYpywmmgjplkuzYxzUgLJ8UvDKUUk" title="Salsa Mix">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n2343">
                                    <yt-img-shadow class="box-content flex items-center shrink-0" data-cid="n2344" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem]" data-cid="n2345" data-component="image" alt="" id="img" src="/assets/cloned/images/53f4ec8bb977.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n2346" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none" data-cid="n2347" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px]" data-cid="n2348">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px]" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n2349" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0" data-cid="n2350" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06]" data-cid="n2351" data-component="button" aria-disabled="false" aria-label="Play Salsa Mix" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004" data-cid="n2352">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle" data-cid="n2353">
                                            <span className="box-content flex justify-center items-center" data-cid="n2354">
                                              <div className="box-content block" data-cid="n2355">
                                                <Icon21 cid={"n2356"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden" data-cid="n2357" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0" data-cid="n2358" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center" data-cid="n2359" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0" data-cid="n2360" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle" data-cid="n2361">
                                              <span className="box-content flex justify-center items-center" data-cid="n2362">
                                                <div className="box-content block" data-cid="n2363">
                                                  <Icon22 cid={"n2364"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px]" data-cid="n2365" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content h-[1.9125rem] block absolute right-[8.8375rem] bottom-2 left-2 max-md:h-[1.7rem] max-md:right-[7.8rem] 2xl:h-[2.3875rem] 2xl:right-[178.5px]" data-cid="n2366" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n2367">
                                  <div className="box-content max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:max-h-[2.4rem]" data-cid="n2368">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n2369">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap" data-cid="n2370" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_lc4yBYpywmmgjplkuzYxzUgLJ8UvDKUUk">
                                        Salsa Mix
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n2371">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n2372">
                                      Marc Anthony, Willie Colón, Jerry Rivera, Rubén Blades
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n2373" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n2374" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px]" data-cid="n2375" data-component="link" href="/playlist?list=RDCLAK5uy_kP2172rQNb3KFXz880xp6M98R_ME5CIKA" title="Hip-Hop Classics">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n2376">
                                    <yt-img-shadow class="box-content flex items-center shrink-0" data-cid="n2377" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem]" data-cid="n2378" data-component="image" alt="" id="img" src="/assets/cloned/images/e81404605d45.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n2379" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none" data-cid="n2380" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px]" data-cid="n2381">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px]" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n2382" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0" data-cid="n2383" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06]" data-cid="n2384" data-component="button" aria-disabled="false" aria-label="Play Hip-Hop Classics" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004" data-cid="n2385">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle" data-cid="n2386">
                                            <span className="box-content flex justify-center items-center" data-cid="n2387">
                                              <div className="box-content block" data-cid="n2388">
                                                <Icon21 cid={"n2389"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden" data-cid="n2390" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0" data-cid="n2391" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center" data-cid="n2392" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0" data-cid="n2393" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle" data-cid="n2394">
                                              <span className="box-content flex justify-center items-center" data-cid="n2395">
                                                <div className="box-content block" data-cid="n2396">
                                                  <Icon22 cid={"n2397"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px]" data-cid="n2398" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem]" data-cid="n2399" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n2400">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n2401">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n2402">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap" data-cid="n2403" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_kP2172rQNb3KFXz880xp6M98R_ME5CIKA">
                                        Hip-Hop Classics
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n2404">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n2405">
                                      JAŸ-Z, The Notorious B.I.G., Eminem, Snoop Dogg
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n2406" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n2407" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px]" data-cid="n2408" data-component="link" href="/playlist?list=RDCLAK5uy_kfLKunrTVrL7hzgZz_skOKXn_MVzrpB6g" title="Los Himnos">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n2409">
                                    <yt-img-shadow class="box-content flex items-center shrink-0" data-cid="n2410" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem]" data-cid="n2411" data-component="image" alt="" id="img" src="/assets/cloned/images/feabd6ab5501.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n2412" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none" data-cid="n2413" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 2xl:w-[224.7px] 2xl:h-[224.7px]" data-cid="n2414">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] 2xl:w-[224.7px] 2xl:h-[224.7px]" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n2415" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0" data-cid="n2416" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06]" data-cid="n2417" data-component="button" aria-disabled="false" aria-label="Play Los Himnos" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004" data-cid="n2418">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle" data-cid="n2419">
                                            <span className="box-content flex justify-center items-center" data-cid="n2420">
                                              <div className="box-content block" data-cid="n2421">
                                                <Icon21 cid={"n2422"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden" data-cid="n2423" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0" data-cid="n2424" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center" data-cid="n2425" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0" data-cid="n2426" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle" data-cid="n2427">
                                              <span className="box-content flex justify-center items-center" data-cid="n2428">
                                                <div className="box-content block" data-cid="n2429">
                                                  <Icon22 cid={"n2430"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px]" data-cid="n2431" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem]" data-cid="n2432" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n2433">
                                  <div className="box-content max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:max-h-[2.4rem]" data-cid="n2434">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n2435">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap" data-cid="n2436" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_kfLKunrTVrL7hzgZz_skOKXn_MVzrpB6g">
                                        Los Himnos
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n2437">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n2438">
                                      Selena, Bad Bunny, KAROL G, Shakira
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n2439" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n2440" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px]" data-cid="n2441" data-component="link" href="/playlist?list=RDCLAK5uy_lk7bC42AIcIBpSBiioTBrFdJeDNLSGCyE" title="Old-School Reggaeton">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n2442">
                                    <yt-img-shadow class="box-content flex items-center shrink-0" data-cid="n2443" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem]" data-cid="n2444" data-component="image" alt="" id="img" src="/assets/cloned/images/103982359b9b.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n2445" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none" data-cid="n2446" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 2xl:w-[224.7px] 2xl:h-[224.7px]" data-cid="n2447">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] 2xl:w-[224.7px] 2xl:h-[224.7px]" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n2448" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0" data-cid="n2449" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06]" data-cid="n2450" data-component="button" aria-disabled="false" aria-label="Play Old-School Reggaeton" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004" data-cid="n2451">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle" data-cid="n2452">
                                            <span className="box-content flex justify-center items-center" data-cid="n2453">
                                              <div className="box-content block" data-cid="n2454">
                                                <Icon21 cid={"n2455"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden" data-cid="n2456" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0" data-cid="n2457" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center" data-cid="n2458" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0" data-cid="n2459" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle" data-cid="n2460">
                                              <span className="box-content flex justify-center items-center" data-cid="n2461">
                                                <div className="box-content block" data-cid="n2462">
                                                  <Icon22 cid={"n2463"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px]" data-cid="n2464" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem]" data-cid="n2465" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n2466">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n2467">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n2468">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap" data-cid="n2469" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_lk7bC42AIcIBpSBiioTBrFdJeDNLSGCyE">
                                        Old-School Reggaeton
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n2470">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n2471">
                                      {"Daddy Yankee, Tego Calderón, Plan B, Wisin & Yandel"}
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n2472" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n2473" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px]" data-cid="n2474" data-component="link" href="/playlist?list=RDCLAK5uy_k6ACq4WNfG-uJSz_jML9ZkUEULUoCzWIw" title="Cumbia Megamix">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px]" data-cid="n2475">
                                    <yt-img-shadow class="box-content flex items-center shrink-0" data-cid="n2476" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem]" data-cid="n2477" data-component="image" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px]" data-cid="n2478" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none" data-cid="n2479" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  <ytmusic-item-thumbnail-overlay-renderer class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:left-0" data-cid="n2480">
                                    <ytmusic-background-overlay-renderer class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:opacity-[1e-06]" data-cid="n2481" id="background" />
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0" data-cid="n2482" id="content">
                                      <ytmusic-play-button-renderer class="hidden 2xl:box-content 2xl:w-10 2xl:h-10 2xl:block 2xl:absolute 2xl:right-3 2xl:bottom-3 2xl:opacity-[1e-06]" data-cid="n2483" aria-disabled="false" aria-label="Play Classic Latin Hits" id="play-button" role="button">
                                        <div className="hidden 2xl:box-content 2xl:w-10 2xl:h-10 2xl:flex 2xl:rounded-[50%] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden 2xl:bg-color-004" data-cid="n2484">
                                          {" "}
                                          <yt-icon class="hidden 2xl:box-content 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n2485">
                                            <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n2486">
                                              <div className="hidden 2xl:box-content 2xl:block" data-cid="n2487">
                                                <Icon15 cid={"n2488"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:flex 2xl:absolute 2xl:top-2 2xl:right-1 2xl:opacity-[1e-06] 2xl:justify-center 2xl:items-center 2xl:overflow-hidden" data-cid="n2489" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="hidden 2xl:box-content 2xl:flex 2xl:shrink-0" data-cid="n2490" id="button-shape">
                                        <div className="hidden 2xl:basis-full 2xl:shrink-0 2xl:h-9 2xl:flex 2xl:relative 2xl:min-w-0 2xl:rounded-[18px] 2xl:justify-center 2xl:items-center 2xl:text-color-002 2xl:[font-family:Roboto,_Arial,_sans-serif] 2xl:text-sm 2xl:font-medium 2xl:leading-9 2xl:text-center" data-cid="n2491" aria-label="Action menu">
                                          <div className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:block 2xl:leading-0" data-cid="n2492" aria-hidden="true">
                                            <span className="hidden 2xl:box-content 2xl:w-6 2xl:h-6 2xl:inline-flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle" data-cid="n2493">
                                              <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n2494">
                                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n2495">
                                                  <Icon16 cid={"n2496"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="hidden 2xl:box-content 2xl:w-9 2xl:h-9 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:min-w-0 2xl:rounded-[18px]" data-cid="n2497" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem]" data-cid="n2498" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col 2xl:h-[4.2875rem]" data-cid="n2499">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n2500">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n2501">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap" data-cid="n2502" data-component="link" dir="auto" href="/playlist?list=RDCLAK5uy_k6ACq4WNfG-uJSz_jML9ZkUEULUoCzWIw">
                                        Cumbia Megamix
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n2503">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n2504">
                                      Grupo Frontera, Los Ángeles Azules, Selena, Ke personajes
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n2505" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[15.5875rem] block align-top max-md:w-40 max-md:h-[15.3875rem] max-md:pr-4 md:max-lg:pr-14 2xl:w-[224.7px] 2xl:h-[18.825rem]" data-cid="n2506" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px]" data-cid="n2507" href="/playlist?list=RDCLAK5uy_l5PtosQBTFpm24Dfd4YPpbUx2VzgiGpQc" title="Música Mexicana Essentials">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px]" data-cid="n2508">
                                    <yt-img-shadow class="box-content flex items-center shrink-0" data-cid="n2509" id="image">
                                      <img className="box-content w-full h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem]" data-cid="n2510" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px]" data-cid="n2511" id="ripple">
                                    {" "}
                                    <div className="box-content w-45 h-full block absolute top-0 overflow-hidden pointer-events-none 2xl:w-[224.7px]" data-cid="n2512" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem]" data-cid="n2513" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[3.8375rem] flex mt-2 flex-col max-md:h-[4.8875rem] 2xl:h-[4.2875rem]" data-cid="n2514">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 max-md:h-[2.1rem] 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n2515">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n2516">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap" data-cid="n2517" dir="auto" href="/playlist?list=RDCLAK5uy_l5PtosQBTFpm24Dfd4YPpbUx2VzgiGpQc">
                                        Música Mexicana Essentials
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[2.4rem]" data-cid="n2518">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n2519">
                                      Grupo Frontera, Julión Álvarez y su Norteño Banda, Peso Pluma, Junior H
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n2520" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                            </div>
                            {" "}
                          </ytmusic-carousel>
                          {" "}
                        </div>
                        {" "}
                      </ytmusic-carousel-shelf-renderer>
                      <ytmusic-carousel-shelf-renderer class="box-content h-87 block mb-6 max-md:h-[20.3rem] max-md:mb-4 md:max-lg:h-83 2xl:h-[26.7rem]" data-cid="n2521">
                        <div className="box-content block" data-cid="n2522">
                          <div className="box-content flex max-w-249 mx-26.5 pt-8 justify-between gap-6 max-md:max-w-[21.4375rem] max-md:mx-4 max-lg:pt-4 max-md:gap-2 md:max-lg:max-w-143 md:max-lg:mx-15.5 2xl:max-w-367" data-cid="n2523" id="header-group">
                            <ytmusic-carousel-shelf-basic-header-renderer class="box-content flex items-center grow" data-cid="n2524">
                              {" "}
                              <div className="box-content w-full h-full block" data-cid="n2525" id="content-group">
                                {" "}
                                <div className="box-content h-full flex justify-between items-end gap-2" data-cid="n2526" id="details">
                                  <yt-formatted-string class="box-content max-w-140 max-h-[4.2rem] overflow-hidden [font-family:'YouTube_Sans',_Roboto,_'Noto_Naskh_Arabic_UI',_Arial,_sans-serif] text-[1.75rem] font-bold leading-[2.125rem] line-clamp-2 max-lg:max-w-100 max-lg:max-h-[3.6rem] max-lg:text-2xl max-lg:leading-[1.8125rem] 2xl:max-w-200 2xl:max-h-27 2xl:text-[2.8125rem] 2xl:leading-13.5" data-cid="n2527" aria-level="2" role="heading">
                                    Quick picks
                                  </yt-formatted-string>
                                  {" "}
                                  <div className="box-content flex items-center 2xl:hidden" data-cid="n2528" id="button-group">
                                    {" "}
                                    <div className="box-content block 2xl:hidden" data-cid="n2529" id="more-content-button">
                                      <yt-button-renderer class="box-content inline-block 2xl:hidden" data-cid="n2530">
                                        <yt-button-shape class="box-content flex grow basis-[1e-09px] 2xl:hidden" data-cid="n2531">
                                          <button className="h-9 border border-solid border-border flex relative min-w-0 px-[0.9375rem] rounded-[18px] justify-center items-center grow basis-[1e-09px] text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center whitespace-nowrap text-nowrap cursor-pointer max-md:h-6 max-md:px-[0.4375rem] max-md:rounded-xl max-md:text-xs max-md:leading-6 2xl:hidden" data-cid="n2532" data-component="button" aria-label="Play all">
                                            <div className="box-content h-full block overflow-hidden 2xl:hidden" data-cid="n2533">
                                              <span className="box-content inline 2xl:hidden" data-cid="n2534" role="text">
                                                Play all
                                              </span>
                                            </div>
                                            <yt-touch-feedback-shape class="box-content w-[4.8125rem] h-8.5 block absolute top-0 left-0 min-w-0 rounded-[18px] max-md:w-13 max-md:h-5.5 max-md:rounded-xl 2xl:hidden" data-cid="n2535" aria-hidden="true" />
                                          </button>
                                        </yt-button-shape>
                                      </yt-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </ytmusic-carousel-shelf-basic-header-renderer>
                            {" "}
                            <div className="box-content flex items-end gap-4 max-md:gap-2" data-cid="n2536">
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative opacity-40 p-2 rounded-[50%] text-muted-foreground text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n2537" disabled id="previous-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center pointer-events-none" data-cid="n2538" data-component="button" aria-label="Previous" disabled id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle pointer-events-none" data-cid="n2539">
                                    <span className="box-content flex justify-center items-center pointer-events-none" data-cid="n2540">
                                      <div className="box-content block pointer-events-none" data-cid="n2541">
                                        <Icon12 cid={"n2542"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n2543" id="interaction" />
                              </yt-icon-button>
                              {" "}
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative p-2 rounded-[50%] text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n2544" id="next-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center cursor-pointer" data-cid="n2545" data-component="button" aria-label="Next" id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle" data-cid="n2546">
                                    <span className="box-content flex justify-center items-center" data-cid="n2547">
                                      <div className="box-content block" data-cid="n2548">
                                        <Icon17 cid={"n2549"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n2550" id="interaction" />
                              </yt-icon-button>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <ytmusic-carousel class="box-content h-60 block relative z-0 mt-4 mb-6 overflow-hidden 2xl:h-[18.825rem]" data-cid="n2551" id="ytmusic-carousel">
                            <div className="box-content w-249 h-full grid relative mx-26.5 gap-y-4 gap-x-6 grid-cols-[436px_436px_436px] grid-rows-[48px_48px_48px_48px] [grid-auto-flow:column] overflow-x-scroll overflow-y-hidden whitespace-nowrap text-nowrap [list-style-type:disc] list-outside max-md:w-[23.4375rem] max-lg:gap-x-4 max-md:grid-cols-[355px_347px_355px] max-lg:mx-0 md:max-lg:w-174 md:max-lg:grid-cols-[484px_436px_484px] 2xl:w-367 2xl:grid-cols-[224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px] 2xl:grid-rows-[301.2px]" data-cid="n2552" id="items">
                              {MediaTile3_data.map((d, i) => <MediaTile3 key={i} d={d} cids={MediaTile3_cids[i]} styles={MediaTile3_styles[i]} />)}
                              <ytmusic-two-row-item-renderer class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[18.825rem] 2xl:block 2xl:align-top" data-cid="n2751" role="listitem">
                                <a className="hidden 2xl:box-content 2xl:block 2xl:relative 2xl:pt-[224.7px] 2xl:overflow-hidden 2xl:cursor-pointer" data-cid="n2752" href="/playlist?list=RDCLAK5uy_l5fqcqrL-bmWMGgd4Zot1VCpeU0tjtbLY" title="Feelin' Good in the '00s">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:top-0 2xl:rounded-lg 2xl:overflow-hidden" data-cid="n2753">
                                    <yt-img-shadow class="hidden 2xl:box-content 2xl:flex 2xl:items-center 2xl:shrink-0" data-cid="n2754" id="image">
                                      <img className="hidden 2xl:box-content 2xl:w-full 2xl:h-[14.0625rem] 2xl:block 2xl:max-w-full 2xl:overflow-clip 2xl:object-cover" data-cid="n2755" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-[224.7px] 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:overflow-hidden 2xl:pointer-events-none" data-cid="n2756" id="ripple">
                                    {" "}
                                    <div className="hidden 2xl:box-content 2xl:w-[224.7px] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:overflow-hidden 2xl:pointer-events-none" data-cid="n2757" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <div className="hidden 2xl:box-content 2xl:w-[2.3875rem] 2xl:h-[2.3875rem] 2xl:block 2xl:absolute 2xl:bottom-2 2xl:left-2" data-cid="n2758" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="hidden 2xl:box-content 2xl:h-[4.2875rem] 2xl:flex 2xl:mt-2 2xl:flex-col" data-cid="n2759">
                                  <div className="hidden 2xl:box-content 2xl:h-[1.2rem] 2xl:max-h-[2.4rem] 2xl:mt-2 2xl:overflow-hidden 2xl:whitespace-normal 2xl:line-clamp-2 2xl:block" data-cid="n2760">
                                    {" "}
                                    <yt-formatted-string class="hidden 2xl:box-content 2xl:inline 2xl:text-base 2xl:font-medium 2xl:leading-[1.1875rem]" data-cid="n2761">
                                      <a className="hidden 2xl:box-content 2xl:inline-block 2xl:cursor-pointer 2xl:whitespace-nowrap" data-cid="n2762" dir="auto" href="/playlist?list=RDCLAK5uy_l5fqcqrL-bmWMGgd4Zot1VCpeU0tjtbLY">
                                        Feelin' Good in the '00s
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="hidden 2xl:box-content 2xl:h-[2.4rem] 2xl:flex 2xl:mt-[0.1875rem] 2xl:items-center" data-cid="n2763">
                                    {" "}
                                    <yt-formatted-string class="hidden 2xl:box-content 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:flex-1 2xl:overflow-hidden 2xl:text-color-003 2xl:text-base 2xl:leading-[1.1875rem] 2xl:whitespace-normal 2xl:line-clamp-2 2xl:block" data-cid="n2764">
                                      Britney Spears, Justin Timberlake, Christina Aguilera, Fergie
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="hidden 2xl:box-content 2xl:block" data-cid="n2765" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-responsive-list-item-renderer class="box-content h-12 flex relative px-2 items-center align-top max-md:pl-4 md:max-lg:pl-14 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n2766" role="listitem">
                                {" "}
                                <div className="box-content w-12 h-full block relative mr-4 rounded-xs shrink-0 overflow-hidden 2xl:hidden" data-cid="n2767">
                                  <ytmusic-thumbnail-renderer class="box-content w-12 h-12 block absolute rounded-sm overflow-hidden 2xl:hidden" data-cid="n2768">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 2xl:hidden" data-cid="n2769" id="image">
                                      <img className="box-content w-full h-12 block max-w-full overflow-clip object-contain 2xl:hidden" data-cid="n2770" data-component="image" alt="" id="img" src="/assets/cloned/images/f05e94cbd63b.jpg" width="56" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-12 h-12 block absolute opacity-[1e-06] 2xl:hidden group-hover:opacity-100" data-cid="n2771">
                                    <ytmusic-background-overlay-renderer class="box-content w-12 h-12 block absolute top-0 left-0 2xl:hidden" style={{ backgroundImage: "linear-gradient(var(--clr-3), var(--clr-3))" }} data-cid="n2772" id="background" />
                                    {" "}
                                    <div className="box-content w-12 h-full flex absolute top-0 left-0 justify-center items-center 2xl:hidden" data-cid="n2773" id="content">
                                      <ytmusic-play-button-renderer class="box-content block relative 2xl:hidden" data-cid="n2774" data-component="button" aria-disabled="false" aria-label="Play Hootie Frutti" id="play-button" role="button">
                                        <div className="box-content w-8 h-8 flex rounded-[50%] justify-center items-center overflow-hidden cursor-pointer 2xl:hidden" data-cid="n2775">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n2776">
                                            <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2777">
                                              <div className="box-content block 2xl:hidden" data-cid="n2778">
                                                <Icon23 cid={"n2779"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content h-[2.2875rem] flex flex-wrap items-center flex-1 overflow-hidden 2xl:hidden" data-cid="n2780">
                                  <div className="box-content h-[1.05rem] flex mb-[0.1875rem] justify-between grow-[6] basis-full overflow-hidden 2xl:hidden" data-cid="n2781">
                                    <yt-formatted-string class="box-content h-[1.05rem] flex overflow-hidden text-sm font-medium leading-[1.0625rem] whitespace-pre 2xl:hidden" data-cid="n2782" title="Hootie Frutti">
                                      <a className="box-content h-[1.05rem] block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n2783" data-component="link" href={"/watch?v=kwH2nYwuFdA&list=RDAMVMkwH2nYwuFdA"}>
                                        Hootie Frutti
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="box-content flex z-1 items-center grow-[9] basis-[1px] overflow-hidden 2xl:hidden" data-cid="n2784">
                                    <div className="box-content flex min-w-0 max-w-[max-content] items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden" data-cid="n2785">
                                      <yt-formatted-string class="box-content flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n2786" aria-label="KATSEYE • 52 million plays" title="KATSEYE • 52M plays">
                                        <a className="box-content block -mr-[0.0875rem] pr-[0.0875rem] cursor-pointer 2xl:hidden" data-cid="n2787" data-component="link" href="/channel/UCX9kfYB9t0tnd6DYUC2iuKg">
                                          KATSEYE
                                        </a>
                                        <span className="box-content block 2xl:hidden" data-cid="n2788">
                                          {" • "}
                                        </span>
                                        <span className="box-content block overflow-hidden 2xl:hidden" data-cid="n2789">
                                          52M plays
                                        </span>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                    <div className="box-content flex min-w-0 max-w-[max-content] ml-1 items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden before:content-['•'] before:block before:w-[0.3125rem] before:h-[1.05rem] before:mr-1 before:text-color-003 before:text-sm before:leading-[1.0625rem] 2xl:before:hidden" data-cid="n2790">
                                      <yt-formatted-string class="box-content flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n2791" title="WILD">
                                        <a className="box-content block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n2792" data-component="link" href="/browse/MPREb_vb7fvP4nHTS">
                                          WILD
                                        </a>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                                <ytmusic-menu-renderer class="box-content w-0 h-9 flex ml-4 items-center basis-0 overflow-hidden 2xl:hidden" data-cid="n2793" aria-label="Action menu">
                                  <div className="box-content w-0 h-9 flex overflow-hidden 2xl:hidden" data-cid="n2794" id="top-level-buttons">
                                    {" "}
                                    <ytmusic-like-button-renderer class="box-content w-0 h-9 block mr-2 overflow-hidden 2xl:hidden" data-cid="n2795">
                                      <yt-button-shape class="box-content inline-block opacity-[1e-06] grow basis-[1e-09px] 2xl:hidden group-hover:opacity-100" data-cid="n2796" id="button-shape-like">
                                        {" "}
                                        <button className="w-9 h-9 flex relative rounded-[18px] justify-center items-center shrink-0 text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n2797" data-component="button" aria-label="Like" aria-pressed="false">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n2798" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n2799">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2800">
                                                <div className="box-content block 2xl:hidden" data-cid="n2801">
                                                  <Icon24 cid={"n2802"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n2803" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                      <yt-button-shape class="box-content inline-block opacity-[1e-06] mr-2 grow basis-[1e-09px] 2xl:hidden group-hover:opacity-100" data-cid="n2804" id="button-shape-dislike">
                                        {" "}
                                        <button className="w-9 h-9 flex relative rounded-[18px] justify-center items-center shrink-0 text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n2805" data-component="button" aria-label="Dislike" aria-pressed="false">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n2806" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n2807">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2808">
                                                <div className="box-content block 2xl:hidden" data-cid="n2809">
                                                  <Icon25 cid={"n2810"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n2811" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-like-button-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <yt-button-shape class="box-content flex opacity-[1e-06] shrink-0 2xl:hidden group-hover:opacity-100" data-cid="n2812" id="button-shape">
                                    <button className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n2813" data-component="button" aria-label="Action menu">
                                      <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n2814" aria-hidden="true">
                                        <span className="box-content h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n2815">
                                          <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2816">
                                            <div className="box-content block 2xl:hidden" data-cid="n2817">
                                              <Icon26 cid={"n2818"} />
                                            </div>
                                          </span>
                                        </span>
                                      </div>
                                      <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n2819" aria-hidden="true" />
                                    </button>
                                  </yt-button-shape>
                                  {" "}
                                </ytmusic-menu-renderer>
                                {" "}
                              </ytmusic-responsive-list-item-renderer>
                              <ytmusic-responsive-list-item-renderer class="box-content w-105 h-12 flex relative px-2 items-center align-top max-md:w-[20.6875rem] max-md:pl-4 md:max-lg:pl-14 2xl:hidden focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px] group" data-cid="n2820" role="listitem">
                                {" "}
                                <div className="box-content w-12 h-full block relative mr-4 rounded-xs shrink-0 overflow-hidden 2xl:hidden" data-cid="n2821">
                                  <ytmusic-thumbnail-renderer class="box-content w-12 h-12 block absolute rounded-sm overflow-hidden 2xl:hidden" data-cid="n2822">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 2xl:hidden" data-cid="n2823" id="image">
                                      <img className="box-content w-full h-12 block max-w-full overflow-clip object-contain 2xl:hidden" data-cid="n2824" data-component="image" alt="" id="img" src="/assets/cloned/images/5a9eaf220e56.jpg" width="56" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-12 h-12 block absolute opacity-[1e-06] 2xl:hidden group-hover:opacity-100" data-cid="n2825">
                                    <ytmusic-background-overlay-renderer class="box-content w-12 h-12 block absolute top-0 left-0 2xl:hidden" style={{ backgroundImage: "linear-gradient(var(--clr-3), var(--clr-3))" }} data-cid="n2826" id="background" />
                                    {" "}
                                    <div className="box-content w-12 h-full flex absolute top-0 left-0 justify-center items-center 2xl:hidden" data-cid="n2827" id="content">
                                      <ytmusic-play-button-renderer class="box-content block relative 2xl:hidden" data-cid="n2828" data-component="button" aria-disabled="false" aria-label="Play Reap What You Sow" id="play-button" role="button">
                                        <div className="box-content w-8 h-8 flex rounded-[50%] justify-center items-center overflow-hidden cursor-pointer 2xl:hidden" data-cid="n2829">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n2830">
                                            <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2831">
                                              <div className="box-content block 2xl:hidden" data-cid="n2832">
                                                <Icon23 cid={"n2833"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content h-[2.2875rem] flex flex-wrap items-center flex-1 overflow-hidden 2xl:hidden" data-cid="n2834">
                                  <div className="box-content h-[1.05rem] flex mb-[0.1875rem] justify-between grow-[6] basis-full overflow-hidden 2xl:hidden" data-cid="n2835">
                                    <yt-formatted-string class="box-content h-[1.05rem] flex overflow-hidden text-sm font-medium leading-[1.0625rem] whitespace-pre 2xl:hidden" data-cid="n2836" title="Reap What You Sow">
                                      <a className="box-content h-[1.05rem] block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n2837" data-component="link" href={"/watch?v=NcT9kYmcrNU&list=RDAMVMNcT9kYmcrNU"}>
                                        Reap What You Sow
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="box-content flex items-center 2xl:hidden" data-cid="n2838" id="stacked-layout-badges">
                                    <ytmusic-inline-badge-renderer class="box-content w-4 h-4 block 2xl:hidden" data-cid="n2839">
                                      <yt-icon class="box-content block relative justify-center items-center align-middle text-color-003 2xl:hidden" data-cid="n2840" aria-label="Explicit" title="Explicit">
                                        <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2841">
                                          <div className="box-content block 2xl:hidden" data-cid="n2842">
                                            <Icon27 cid={"n2843"} />
                                          </div>
                                        </span>
                                      </yt-icon>
                                      {" "}
                                    </ytmusic-inline-badge-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="box-content h-[1.05rem] flex z-1 items-center grow-[9] basis-[1px] overflow-hidden 2xl:hidden" data-cid="n2844">
                                    <div className="box-content flex min-w-0 max-w-[max-content] ml-1 items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden" data-cid="n2845">
                                      <yt-formatted-string class="box-content flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n2846" aria-label="Pooh Shiesty • 6.8 million plays" title="Pooh Shiesty • 6.8M plays">
                                        <a className="box-content block -mr-[0.0875rem] pr-[0.0875rem] cursor-pointer 2xl:hidden" data-cid="n2847" data-component="link" href="/channel/UCHP-7P6ChK4-jiFoz62RcUg">
                                          Pooh Shiesty
                                        </a>
                                        <span className="box-content block 2xl:hidden" data-cid="n2848">
                                          {" • "}
                                        </span>
                                        <span className="box-content block overflow-hidden 2xl:hidden" data-cid="n2849">
                                          6.8M plays
                                        </span>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                    <div className="box-content h-[1.05rem] flex min-w-0 max-w-[max-content] ml-1 items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden before:content-['•'] before:block before:w-[0.3125rem] before:h-[1.05rem] before:mr-1 before:text-color-003 before:text-sm before:leading-[1.0625rem] 2xl:before:hidden" data-cid="n2850">
                                      <yt-formatted-string class="box-content h-[1.05rem] flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n2851" title="All Eyes on Shiest">
                                        <a className="box-content h-[1.05rem] block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n2852" data-component="link" href="/browse/MPREb_5vi8k0Y1zKL">
                                          All Eyes on Shiest
                                        </a>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                                <ytmusic-menu-renderer class="box-content w-0 h-9 flex ml-4 items-center basis-0 overflow-hidden 2xl:hidden" data-cid="n2853" aria-label="Action menu">
                                  <div className="box-content w-0 h-9 flex overflow-hidden 2xl:hidden" data-cid="n2854" id="top-level-buttons">
                                    {" "}
                                    <ytmusic-like-button-renderer class="box-content w-0 h-9 block mr-2 overflow-hidden 2xl:hidden" data-cid="n2855">
                                      <yt-button-shape class="box-content inline-block opacity-[1e-06] grow basis-[1e-09px] 2xl:hidden group-hover:opacity-100" data-cid="n2856" id="button-shape-like">
                                        {" "}
                                        <button className="w-9 h-9 flex relative rounded-[18px] justify-center items-center shrink-0 text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n2857" data-component="button" aria-label="Like" aria-pressed="false">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n2858" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n2859">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2860">
                                                <div className="box-content block 2xl:hidden" data-cid="n2861">
                                                  <Icon24 cid={"n2862"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n2863" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                      <yt-button-shape class="box-content inline-block opacity-[1e-06] mr-2 grow basis-[1e-09px] 2xl:hidden group-hover:opacity-100" data-cid="n2864" id="button-shape-dislike">
                                        {" "}
                                        <button className="w-9 h-9 flex relative rounded-[18px] justify-center items-center shrink-0 text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n2865" data-component="button" aria-label="Dislike" aria-pressed="false">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n2866" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n2867">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2868">
                                                <div className="box-content block 2xl:hidden" data-cid="n2869">
                                                  <Icon25 cid={"n2870"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n2871" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-like-button-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <yt-button-shape class="box-content flex opacity-[1e-06] shrink-0 2xl:hidden group-hover:opacity-100" data-cid="n2872" id="button-shape">
                                    <button className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n2873" data-component="button" aria-label="Action menu">
                                      <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n2874" aria-hidden="true">
                                        <span className="box-content h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n2875">
                                          <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2876">
                                            <div className="box-content block 2xl:hidden" data-cid="n2877">
                                              <Icon26 cid={"n2878"} />
                                            </div>
                                          </span>
                                        </span>
                                      </div>
                                      <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n2879" aria-hidden="true" />
                                    </button>
                                  </yt-button-shape>
                                  {" "}
                                </ytmusic-menu-renderer>
                                {" "}
                              </ytmusic-responsive-list-item-renderer>
                              <ytmusic-responsive-list-item-renderer class="box-content flex relative px-2 items-center align-top max-md:pl-4 md:max-lg:pl-14 2xl:hidden" data-cid="n2880" role="listitem">
                                {" "}
                                <div className="box-content w-12 h-full block relative mr-4 rounded-xs shrink-0 overflow-hidden 2xl:hidden" data-cid="n2881">
                                  <ytmusic-thumbnail-renderer class="box-content w-12 h-12 block absolute rounded-sm overflow-hidden 2xl:hidden" data-cid="n2882">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 2xl:hidden" data-cid="n2883" id="image">
                                      <img className="box-content w-full h-12 block max-w-full overflow-clip object-contain 2xl:hidden" data-cid="n2884" data-component="image" alt="" id="img" src="/assets/cloned/images/2d0e9b62cc54.jpg" width="56" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-12 h-12 block absolute opacity-[1e-06] 2xl:hidden" data-cid="n2885">
                                    <ytmusic-background-overlay-renderer class="box-content w-12 h-12 block absolute top-0 left-0 2xl:hidden" style={{ backgroundImage: "linear-gradient(var(--clr-3), var(--clr-3))" }} data-cid="n2886" id="background" />
                                    {" "}
                                    <div className="box-content w-12 h-full flex absolute top-0 left-0 justify-center items-center 2xl:hidden" data-cid="n2887" id="content">
                                      <ytmusic-play-button-renderer class="box-content block relative 2xl:hidden" data-cid="n2888" data-component="button" aria-disabled="false" aria-label="Play Butterflies" id="play-button" role="button">
                                        <div className="box-content w-8 h-8 flex rounded-[50%] justify-center items-center overflow-hidden cursor-pointer 2xl:hidden" data-cid="n2889">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n2890">
                                            <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2891">
                                              <div className="box-content block 2xl:hidden" data-cid="n2892">
                                                <Icon23 cid={"n2893"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content flex flex-wrap items-center flex-1 overflow-hidden 2xl:hidden" data-cid="n2894">
                                  <div className="box-content flex mb-[0.1875rem] justify-between grow-[6] basis-full overflow-hidden 2xl:hidden" data-cid="n2895">
                                    <yt-formatted-string class="box-content flex overflow-hidden text-sm font-medium leading-[1.0625rem] whitespace-pre 2xl:hidden" data-cid="n2896" title="Butterflies">
                                      <a className="box-content block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n2897" data-component="link" href={"/watch?v=Xq8OEjvTxMw&list=RDAMVMXq8OEjvTxMw"}>
                                        Butterflies
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="box-content flex z-1 items-center grow-[9] basis-[1px] overflow-hidden 2xl:hidden" data-cid="n2898">
                                    <div className="box-content flex min-w-0 max-w-[max-content] items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden" data-cid="n2899">
                                      <yt-formatted-string class="box-content flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n2900" aria-label="Mac Miller • 858 thousand plays" title="Mac Miller • 858K plays">
                                        <a className="box-content block -mr-[0.0875rem] pr-[0.0875rem] cursor-pointer 2xl:hidden" data-cid="n2901" data-component="link" href="/channel/UC52ZqHVQz5OoGhvbWiRal6g">
                                          Mac Miller
                                        </a>
                                        <span className="box-content block 2xl:hidden" data-cid="n2902">
                                          {" • "}
                                        </span>
                                        <span className="box-content block overflow-hidden 2xl:hidden" data-cid="n2903">
                                          858K plays
                                        </span>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                    <div className="box-content flex min-w-0 max-w-[max-content] ml-1 items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden before:content-['•'] before:block before:w-[0.3125rem] before:h-[1.05rem] before:mr-1 before:text-color-003 before:text-sm before:leading-[1.0625rem] 2xl:before:hidden" data-cid="n2904">
                                      <yt-formatted-string class="box-content flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n2905" title="Butterflies">
                                        <a className="box-content block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n2906" data-component="link" href="/browse/MPREb_tbtGhsl0aYE">
                                          Butterflies
                                        </a>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                                <ytmusic-menu-renderer class="box-content w-0 h-9 flex ml-4 items-center basis-0 overflow-hidden 2xl:hidden" data-cid="n2907" aria-label="Action menu">
                                  <div className="box-content w-0 h-9 flex overflow-hidden 2xl:hidden" data-cid="n2908" id="top-level-buttons">
                                    {" "}
                                    <ytmusic-like-button-renderer class="box-content w-0 h-9 block mr-2 overflow-hidden 2xl:hidden" data-cid="n2909">
                                      <yt-button-shape class="box-content inline-block opacity-[1e-06] grow basis-[1e-09px] 2xl:hidden" data-cid="n2910" id="button-shape-like">
                                        {" "}
                                        <button className="w-9 h-9 flex relative rounded-[18px] justify-center items-center shrink-0 text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n2911" data-component="button" aria-label="Like" aria-pressed="false">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n2912" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n2913">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2914">
                                                <div className="box-content block 2xl:hidden" data-cid="n2915">
                                                  <Icon24 cid={"n2916"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n2917" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                      <yt-button-shape class="box-content inline-block opacity-[1e-06] mr-2 grow basis-[1e-09px] 2xl:hidden" data-cid="n2918" id="button-shape-dislike">
                                        {" "}
                                        <button className="w-9 h-9 flex relative rounded-[18px] justify-center items-center shrink-0 text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n2919" data-component="button" aria-label="Dislike" aria-pressed="false">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n2920" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n2921">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2922">
                                                <div className="box-content block 2xl:hidden" data-cid="n2923">
                                                  <Icon25 cid={"n2924"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n2925" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-like-button-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <yt-button-shape class="box-content flex opacity-[1e-06] shrink-0 2xl:hidden" data-cid="n2926" id="button-shape">
                                    <button className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n2927" data-component="button" aria-label="Action menu">
                                      <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n2928" aria-hidden="true">
                                        <span className="box-content h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n2929">
                                          <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2930">
                                            <div className="box-content block 2xl:hidden" data-cid="n2931">
                                              <Icon26 cid={"n2932"} />
                                            </div>
                                          </span>
                                        </span>
                                      </div>
                                      <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n2933" aria-hidden="true" />
                                    </button>
                                  </yt-button-shape>
                                  {" "}
                                </ytmusic-menu-renderer>
                                {" "}
                              </ytmusic-responsive-list-item-renderer>
                              <ytmusic-responsive-list-item-renderer class="box-content flex relative px-2 items-center align-top max-md:pl-4 md:max-lg:pl-14 2xl:hidden" data-cid="n2934" role="listitem">
                                {" "}
                                <div className="box-content w-12 h-full block relative mr-4 rounded-xs shrink-0 overflow-hidden 2xl:hidden" data-cid="n2935">
                                  <ytmusic-thumbnail-renderer class="box-content w-12 h-12 block absolute rounded-sm overflow-hidden 2xl:hidden" data-cid="n2936">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 2xl:hidden" data-cid="n2937" id="image">
                                      <img className="box-content w-full h-12 block max-w-full overflow-clip object-contain 2xl:hidden" data-cid="n2938" data-component="image" alt="" id="img" src="/assets/cloned/images/c7f586cce1b7.jpg" width="56" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-12 h-12 block absolute opacity-[1e-06] 2xl:hidden" data-cid="n2939">
                                    <ytmusic-background-overlay-renderer class="box-content w-12 h-12 block absolute top-0 left-0 2xl:hidden" style={{ backgroundImage: "linear-gradient(var(--clr-3), var(--clr-3))" }} data-cid="n2940" id="background" />
                                    {" "}
                                    <div className="box-content w-12 h-full flex absolute top-0 left-0 justify-center items-center 2xl:hidden" data-cid="n2941" id="content">
                                      <ytmusic-play-button-renderer class="box-content block relative 2xl:hidden" data-cid="n2942" data-component="button" aria-disabled="false" aria-label="Play PERRA" id="play-button" role="button">
                                        <div className="box-content w-8 h-8 flex rounded-[50%] justify-center items-center overflow-hidden cursor-pointer 2xl:hidden" data-cid="n2943">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n2944">
                                            <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2945">
                                              <div className="box-content block 2xl:hidden" data-cid="n2946">
                                                <Icon23 cid={"n2947"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content flex flex-wrap items-center flex-1 overflow-hidden 2xl:hidden" data-cid="n2948">
                                  <div className="box-content flex mb-[0.1875rem] justify-between grow-[6] basis-full overflow-hidden 2xl:hidden" data-cid="n2949">
                                    <yt-formatted-string class="box-content flex overflow-hidden text-sm font-medium leading-[1.0625rem] whitespace-pre 2xl:hidden" data-cid="n2950" title="PERRA">
                                      <a className="box-content block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n2951" data-component="link" href={"/watch?v=9urN0w_0TsM&list=RDAMVM9urN0w_0TsM"}>
                                        PERRA
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="box-content flex items-center 2xl:hidden" data-cid="n2952" id="stacked-layout-badges">
                                    <ytmusic-inline-badge-renderer class="box-content w-4 h-4 block 2xl:hidden" data-cid="n2953">
                                      <yt-icon class="box-content block relative justify-center items-center align-middle text-color-003 2xl:hidden" data-cid="n2954" aria-label="Explicit" title="Explicit">
                                        <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2955">
                                          <div className="box-content block 2xl:hidden" data-cid="n2956">
                                            <Icon27 cid={"n2957"} />
                                          </div>
                                        </span>
                                      </yt-icon>
                                      {" "}
                                    </ytmusic-inline-badge-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="box-content flex z-1 items-center grow-[9] basis-[1px] overflow-hidden 2xl:hidden" data-cid="n2958">
                                    <div className="box-content flex min-w-0 max-w-[max-content] ml-1 items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden" data-cid="n2959">
                                      <yt-formatted-string class="box-content flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n2960" aria-label="Lil Naay • 8.2 million plays" title="Lil Naay • 8.2M plays">
                                        <a className="box-content block -mr-[0.0875rem] pr-[0.0875rem] cursor-pointer 2xl:hidden" data-cid="n2961" data-component="link" href="/channel/UCu_qmyIu8uT-stU7Mx-kcgw">
                                          Lil Naay
                                        </a>
                                        <span className="box-content block 2xl:hidden" data-cid="n2962">
                                          {" • "}
                                        </span>
                                        <span className="box-content block overflow-hidden 2xl:hidden" data-cid="n2963">
                                          8.2M plays
                                        </span>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                    <div className="box-content flex min-w-0 max-w-[max-content] ml-1 items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden before:content-['•'] before:block before:w-[0.3125rem] before:h-[1.05rem] before:mr-1 before:text-color-003 before:text-sm before:leading-[1.0625rem] 2xl:before:hidden" data-cid="n2964">
                                      <yt-formatted-string class="box-content flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n2965" title="PERRA">
                                        <a className="box-content block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n2966" data-component="link" href="/browse/MPREb_HTf6ZoU8Csf">
                                          PERRA
                                        </a>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                                <ytmusic-menu-renderer class="box-content w-0 h-9 flex ml-4 items-center basis-0 overflow-hidden 2xl:hidden" data-cid="n2967" aria-label="Action menu">
                                  <div className="box-content w-0 h-9 flex overflow-hidden 2xl:hidden" data-cid="n2968" id="top-level-buttons">
                                    {" "}
                                    <ytmusic-like-button-renderer class="box-content w-0 h-9 block mr-2 overflow-hidden 2xl:hidden" data-cid="n2969">
                                      <yt-button-shape class="box-content inline-block opacity-[1e-06] grow basis-[1e-09px] 2xl:hidden" data-cid="n2970" id="button-shape-like">
                                        {" "}
                                        <button className="w-9 h-9 flex relative rounded-[18px] justify-center items-center shrink-0 text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n2971" data-component="button" aria-label="Like" aria-pressed="false">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n2972" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n2973">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2974">
                                                <div className="box-content block 2xl:hidden" data-cid="n2975">
                                                  <Icon24 cid={"n2976"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n2977" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                      <yt-button-shape class="box-content inline-block opacity-[1e-06] mr-2 grow basis-[1e-09px] 2xl:hidden" data-cid="n2978" id="button-shape-dislike">
                                        {" "}
                                        <button className="w-9 h-9 flex relative rounded-[18px] justify-center items-center shrink-0 text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n2979" data-component="button" aria-label="Dislike" aria-pressed="false">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n2980" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n2981">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2982">
                                                <div className="box-content block 2xl:hidden" data-cid="n2983">
                                                  <Icon25 cid={"n2984"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n2985" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-like-button-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <yt-button-shape class="box-content flex opacity-[1e-06] shrink-0 2xl:hidden" data-cid="n2986" id="button-shape">
                                    <button className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n2987" data-component="button" aria-label="Action menu">
                                      <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n2988" aria-hidden="true">
                                        <span className="box-content h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n2989">
                                          <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n2990">
                                            <div className="box-content block 2xl:hidden" data-cid="n2991">
                                              <Icon26 cid={"n2992"} />
                                            </div>
                                          </span>
                                        </span>
                                      </div>
                                      <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n2993" aria-hidden="true" />
                                    </button>
                                  </yt-button-shape>
                                  {" "}
                                </ytmusic-menu-renderer>
                                {" "}
                              </ytmusic-responsive-list-item-renderer>
                              <ytmusic-responsive-list-item-renderer class="box-content w-105 h-12 flex relative px-2 items-center align-top max-md:w-[20.6875rem] 2xl:hidden" data-cid="n2994" role="listitem">
                                {" "}
                                <div className="box-content w-12 h-full block relative mr-4 rounded-xs shrink-0 overflow-hidden 2xl:hidden" data-cid="n2995">
                                  <ytmusic-thumbnail-renderer class="box-content w-12 h-12 block absolute rounded-sm overflow-hidden 2xl:hidden" data-cid="n2996">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 2xl:hidden" data-cid="n2997" id="image">
                                      <img className="box-content w-full h-12 block max-w-full overflow-clip object-contain 2xl:hidden" data-cid="n2998" data-component="image" alt="" id="img" src="/assets/cloned/images/f27337748fbb.jpg" width="56" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-12 h-12 block absolute opacity-[1e-06] 2xl:hidden" data-cid="n2999">
                                    <ytmusic-background-overlay-renderer class="box-content w-12 h-12 block absolute top-0 left-0 2xl:hidden" style={{ backgroundImage: "linear-gradient(var(--clr-3), var(--clr-3))" }} data-cid="n3000" id="background" />
                                    {" "}
                                    <div className="box-content w-12 h-full flex absolute top-0 left-0 justify-center items-center 2xl:hidden" data-cid="n3001" id="content">
                                      <ytmusic-play-button-renderer class="box-content block relative 2xl:hidden" data-cid="n3002" data-component="button" aria-disabled="false" aria-label="Play Love It or Hate It" id="play-button" role="button">
                                        <div className="box-content w-8 h-8 flex rounded-[50%] justify-center items-center overflow-hidden cursor-pointer 2xl:hidden" data-cid="n3003">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3004">
                                            <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3005">
                                              <div className="box-content block 2xl:hidden" data-cid="n3006">
                                                <Icon23 cid={"n3007"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content h-[2.2875rem] flex flex-wrap items-center flex-1 overflow-hidden 2xl:hidden" data-cid="n3008">
                                  <div className="box-content h-[1.05rem] flex mb-[0.1875rem] justify-between grow-[6] basis-full overflow-hidden 2xl:hidden" data-cid="n3009">
                                    <yt-formatted-string class="box-content h-[1.05rem] flex overflow-hidden text-sm font-medium leading-[1.0625rem] whitespace-pre 2xl:hidden" data-cid="n3010" title="Love It or Hate It">
                                      <a className="box-content h-[1.05rem] block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n3011" data-component="link" href={"/watch?v=cGvllzkcIfY&list=RDAMVMcGvllzkcIfY"}>
                                        Love It or Hate It
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="box-content flex items-center 2xl:hidden" data-cid="n3012" id="stacked-layout-badges">
                                    <ytmusic-inline-badge-renderer class="box-content w-4 h-4 block 2xl:hidden" data-cid="n3013">
                                      <yt-icon class="box-content block relative justify-center items-center align-middle text-color-003 2xl:hidden" data-cid="n3014" aria-label="Explicit" title="Explicit">
                                        <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3015">
                                          <div className="box-content block 2xl:hidden" data-cid="n3016">
                                            <Icon27 cid={"n3017"} />
                                          </div>
                                        </span>
                                      </yt-icon>
                                      {" "}
                                    </ytmusic-inline-badge-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="box-content h-[1.05rem] flex z-1 items-center grow-[9] basis-[1px] overflow-hidden 2xl:hidden" data-cid="n3018">
                                    <div className="box-content h-[1.05rem] flex min-w-0 max-w-[max-content] ml-1 items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden" data-cid="n3019" aria-label={"The Game, Snoop Dogg, Sela V, and Cool & Dre • 542 thousand plays"} role="text">
                                      <yt-formatted-string class="box-content h-[1.05rem] flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n3020" aria-hidden="true" aria-label={"The Game, Snoop Dogg, Sela V, and Cool & Dre • 542 thousand plays"} title={"The Game, Snoop Dogg, Sela V, and Cool & Dre • 542K plays"}>
                                        <span className="box-content block 2xl:hidden" data-cid="n3021">
                                          {"The Game, Snoop Dogg, Sela V, and Cool & Dre"}
                                        </span>
                                        <span className="box-content block 2xl:hidden" data-cid="n3022">
                                          {" • "}
                                        </span>
                                        <span className="box-content w-0 h-[1.05rem] block overflow-hidden 2xl:hidden" data-cid="n3023">
                                          542K plays
                                        </span>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                    <div className="box-content h-[1.05rem] flex min-w-0 max-w-[max-content] ml-1 items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden before:content-['•'] before:block before:w-[0.3125rem] before:h-[1.05rem] before:mr-1 before:text-color-003 before:text-sm before:leading-[1.0625rem] 2xl:before:hidden" data-cid="n3024">
                                      <yt-formatted-string class="box-content h-[1.05rem] flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n3025" title="The Documentary III">
                                        <a className="box-content h-[1.05rem] block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n3026" data-component="link" href="/browse/MPREb_HIcQzrrqgMs">
                                          The Documentary III
                                        </a>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                                <ytmusic-menu-renderer class="box-content w-0 h-9 flex ml-4 items-center basis-0 overflow-hidden 2xl:hidden" data-cid="n3027" aria-label="Action menu">
                                  <div className="box-content w-0 h-9 flex overflow-hidden 2xl:hidden" data-cid="n3028" id="top-level-buttons">
                                    {" "}
                                    <ytmusic-like-button-renderer class="box-content w-0 h-9 block mr-2 overflow-hidden 2xl:hidden" data-cid="n3029">
                                      <yt-button-shape class="box-content inline-block opacity-[1e-06] grow basis-[1e-09px] 2xl:hidden" data-cid="n3030" id="button-shape-like">
                                        {" "}
                                        <button className="w-9 h-9 flex relative rounded-[18px] justify-center items-center shrink-0 text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n3031" data-component="button" aria-label="Like" aria-pressed="false">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n3032" aria-hidden="true">
                                            <span className="box-content w-6 h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3033">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3034">
                                                <div className="box-content block 2xl:hidden" data-cid="n3035">
                                                  <Icon28 cid={"n3036"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n3037" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                      <yt-button-shape class="box-content inline-block opacity-[1e-06] mr-2 grow basis-[1e-09px] 2xl:hidden" data-cid="n3038" id="button-shape-dislike">
                                        {" "}
                                        <button className="w-9 h-9 flex relative rounded-[18px] justify-center items-center shrink-0 text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n3039" data-component="button" aria-label="Dislike" aria-pressed="false">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n3040" aria-hidden="true">
                                            <span className="box-content w-6 h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3041">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3042">
                                                <div className="box-content block 2xl:hidden" data-cid="n3043">
                                                  <Icon29 cid={"n3044"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n3045" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-like-button-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <yt-button-shape class="box-content flex opacity-[1e-06] shrink-0 2xl:hidden" data-cid="n3046" id="button-shape">
                                    <button className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n3047" data-component="button" aria-label="Action menu">
                                      <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n3048" aria-hidden="true">
                                        <span className="box-content w-6 h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3049">
                                          <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3050">
                                            <div className="box-content block 2xl:hidden" data-cid="n3051">
                                              <Icon30 cid={"n3052"} />
                                            </div>
                                          </span>
                                        </span>
                                      </div>
                                      <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n3053" aria-hidden="true" />
                                    </button>
                                  </yt-button-shape>
                                  {" "}
                                </ytmusic-menu-renderer>
                                {" "}
                              </ytmusic-responsive-list-item-renderer>
                              <ytmusic-responsive-list-item-renderer class="box-content w-105 h-12 flex relative px-2 items-center align-top max-md:w-[20.6875rem] 2xl:hidden" data-cid="n3054" role="listitem">
                                {" "}
                                <div className="box-content w-12 h-full block relative mr-4 rounded-xs shrink-0 overflow-hidden 2xl:hidden" data-cid="n3055">
                                  <ytmusic-thumbnail-renderer class="box-content w-12 h-12 block absolute rounded-sm overflow-hidden 2xl:hidden" data-cid="n3056">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 2xl:hidden" data-cid="n3057" id="image">
                                      <img className="box-content w-full h-12 block max-w-full overflow-clip object-contain 2xl:hidden" data-cid="n3058" data-component="image" alt="" id="img" src="/assets/cloned/images/2a44e79a9493.jpg" width="56" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-12 h-12 block absolute opacity-[1e-06] 2xl:hidden" data-cid="n3059">
                                    <ytmusic-background-overlay-renderer class="box-content w-12 h-12 block absolute top-0 left-0 2xl:hidden" style={{ backgroundImage: "linear-gradient(var(--clr-3), var(--clr-3))" }} data-cid="n3060" id="background" />
                                    {" "}
                                    <div className="box-content w-12 h-full flex absolute top-0 left-0 justify-center items-center 2xl:hidden" data-cid="n3061" id="content">
                                      <ytmusic-play-button-renderer class="box-content block relative 2xl:hidden" data-cid="n3062" data-component="button" aria-disabled="false" aria-label="Play No Jewelry" id="play-button" role="button">
                                        <div className="box-content w-8 h-8 flex rounded-[50%] justify-center items-center overflow-hidden cursor-pointer 2xl:hidden" data-cid="n3063">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3064">
                                            <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3065">
                                              <div className="box-content block 2xl:hidden" data-cid="n3066">
                                                <Icon23 cid={"n3067"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content h-[2.2875rem] flex flex-wrap items-center flex-1 overflow-hidden 2xl:hidden" data-cid="n3068">
                                  <div className="box-content flex mb-[0.1875rem] justify-between grow-[6] basis-full overflow-hidden 2xl:hidden" data-cid="n3069">
                                    <yt-formatted-string class="box-content flex overflow-hidden text-sm font-medium leading-[1.0625rem] whitespace-pre 2xl:hidden" data-cid="n3070" title="No Jewelry">
                                      <a className="box-content block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n3071" data-component="link" href={"/watch?v=kcVKyft6h98&list=RDAMVMkcVKyft6h98"}>
                                        No Jewelry
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="box-content flex items-center 2xl:hidden" data-cid="n3072" id="stacked-layout-badges">
                                    <ytmusic-inline-badge-renderer class="box-content w-4 h-4 block 2xl:hidden" data-cid="n3073">
                                      <yt-icon class="box-content block relative justify-center items-center align-middle text-color-003 2xl:hidden" data-cid="n3074" aria-label="Explicit" title="Explicit">
                                        <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3075">
                                          <div className="box-content block 2xl:hidden" data-cid="n3076">
                                            <Icon27 cid={"n3077"} />
                                          </div>
                                        </span>
                                      </yt-icon>
                                      {" "}
                                    </ytmusic-inline-badge-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="box-content h-[1.05rem] flex z-1 items-center grow-[9] basis-[1px] overflow-hidden 2xl:hidden" data-cid="n3078">
                                    <div className="box-content h-[1.05rem] flex min-w-0 max-w-[max-content] ml-1 items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden" data-cid="n3079">
                                      <yt-formatted-string class="box-content h-[1.05rem] flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n3080" aria-label="Belly Gang Kushington • 704 thousand plays" title="Belly Gang Kushington • 704K plays">
                                        <a className="box-content block -mr-[0.0875rem] pr-[0.0875rem] cursor-pointer 2xl:hidden" data-cid="n3081" data-component="link" href="/channel/UCMC8AE2uHAHfqcldH_98j0g">
                                          Belly Gang Kushington
                                        </a>
                                        <span className="box-content block 2xl:hidden" data-cid="n3082">
                                          {" • "}
                                        </span>
                                        <span className="box-content block overflow-hidden 2xl:hidden" data-cid="n3083">
                                          704K plays
                                        </span>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                    <div className="box-content flex min-w-0 max-w-[max-content] ml-1 items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden before:content-['•'] before:block before:w-[0.3125rem] before:h-[1.05rem] before:mr-1 before:text-color-003 before:text-sm before:leading-[1.0625rem] 2xl:before:hidden" data-cid="n3084">
                                      <yt-formatted-string class="box-content flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n3085" title="No Jewelry">
                                        <a className="box-content block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n3086" data-component="link" href="/browse/MPREb_vf5gXpVmYP8">
                                          No Jewelry
                                        </a>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                                <ytmusic-menu-renderer class="box-content w-0 h-9 flex ml-4 items-center basis-0 overflow-hidden 2xl:hidden" data-cid="n3087" aria-label="Action menu">
                                  <div className="box-content w-0 h-9 flex overflow-hidden 2xl:hidden" data-cid="n3088" id="top-level-buttons">
                                    {" "}
                                    <ytmusic-like-button-renderer class="box-content w-0 h-9 block mr-2 overflow-hidden 2xl:hidden" data-cid="n3089">
                                      <yt-button-shape class="box-content inline-block opacity-[1e-06] grow basis-[1e-09px] 2xl:hidden" data-cid="n3090" id="button-shape-like">
                                        {" "}
                                        <button className="w-9 h-9 flex relative rounded-[18px] justify-center items-center shrink-0 text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n3091" data-component="button" aria-label="Like" aria-pressed="false">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n3092" aria-hidden="true">
                                            <span className="box-content w-6 h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3093">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3094">
                                                <div className="box-content block 2xl:hidden" data-cid="n3095">
                                                  <Icon28 cid={"n3096"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n3097" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                      <yt-button-shape class="box-content inline-block opacity-[1e-06] mr-2 grow basis-[1e-09px] 2xl:hidden" data-cid="n3098" id="button-shape-dislike">
                                        {" "}
                                        <button className="w-9 h-9 flex relative rounded-[18px] justify-center items-center shrink-0 text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n3099" data-component="button" aria-label="Dislike" aria-pressed="false">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n3100" aria-hidden="true">
                                            <span className="box-content w-6 h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3101">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3102">
                                                <div className="box-content block 2xl:hidden" data-cid="n3103">
                                                  <Icon29 cid={"n3104"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n3105" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-like-button-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <yt-button-shape class="box-content flex opacity-[1e-06] shrink-0 2xl:hidden" data-cid="n3106" id="button-shape">
                                    <button className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n3107" data-component="button" aria-label="Action menu">
                                      <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n3108" aria-hidden="true">
                                        <span className="box-content w-6 h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3109">
                                          <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3110">
                                            <div className="box-content block 2xl:hidden" data-cid="n3111">
                                              <Icon30 cid={"n3112"} />
                                            </div>
                                          </span>
                                        </span>
                                      </div>
                                      <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n3113" aria-hidden="true" />
                                    </button>
                                  </yt-button-shape>
                                  {" "}
                                </ytmusic-menu-renderer>
                                {" "}
                              </ytmusic-responsive-list-item-renderer>
                              <ytmusic-responsive-list-item-renderer class="box-content w-105 h-12 flex relative px-2 items-center align-top max-md:w-[20.6875rem] 2xl:hidden" data-cid="n3114" role="listitem">
                                {" "}
                                <div className="box-content w-12 h-full block relative mr-4 rounded-xs shrink-0 overflow-hidden 2xl:hidden" data-cid="n3115">
                                  <ytmusic-thumbnail-renderer class="box-content w-12 h-12 block absolute rounded-sm overflow-hidden 2xl:hidden" data-cid="n3116">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 2xl:hidden" data-cid="n3117" id="image">
                                      <img className="box-content w-full h-12 block max-w-full overflow-clip object-contain 2xl:hidden" data-cid="n3118" data-component="image" alt="" id="img" src="/assets/cloned/images/a81ec79153d3.jpg" width="56" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-12 h-12 block absolute opacity-[1e-06] 2xl:hidden" data-cid="n3119">
                                    <ytmusic-background-overlay-renderer class="box-content w-12 h-12 block absolute top-0 left-0 2xl:hidden" style={{ backgroundImage: "linear-gradient(var(--clr-3), var(--clr-3))" }} data-cid="n3120" id="background" />
                                    {" "}
                                    <div className="box-content w-12 h-full flex absolute top-0 left-0 justify-center items-center 2xl:hidden" data-cid="n3121" id="content">
                                      <ytmusic-play-button-renderer class="box-content block relative 2xl:hidden" data-cid="n3122" data-component="button" aria-disabled="false" aria-label="Play Back Ina Yams" id="play-button" role="button">
                                        <div className="box-content w-8 h-8 flex rounded-[50%] justify-center items-center overflow-hidden cursor-pointer 2xl:hidden" data-cid="n3123">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3124">
                                            <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3125">
                                              <div className="box-content block 2xl:hidden" data-cid="n3126">
                                                <Icon23 cid={"n3127"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content h-[2.2875rem] flex flex-wrap items-center flex-1 overflow-hidden 2xl:hidden" data-cid="n3128">
                                  <div className="box-content h-[1.05rem] flex mb-[0.1875rem] justify-between grow-[6] basis-full overflow-hidden 2xl:hidden" data-cid="n3129">
                                    <yt-formatted-string class="box-content h-[1.05rem] flex overflow-hidden text-sm font-medium leading-[1.0625rem] whitespace-pre 2xl:hidden" data-cid="n3130" title="Back Ina Yams">
                                      <a className="box-content h-[1.05rem] block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n3131" data-component="link" href={"/watch?v=pqj9-XBLG54&list=RDAMVMpqj9-XBLG54"}>
                                        Back Ina Yams
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="box-content flex items-center 2xl:hidden" data-cid="n3132" id="stacked-layout-badges">
                                    <ytmusic-inline-badge-renderer class="box-content w-4 h-4 block 2xl:hidden" data-cid="n3133">
                                      <yt-icon class="box-content block relative justify-center items-center align-middle text-color-003 2xl:hidden" data-cid="n3134" aria-label="Explicit" title="Explicit">
                                        <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3135">
                                          <div className="box-content block 2xl:hidden" data-cid="n3136">
                                            <Icon27 cid={"n3137"} />
                                          </div>
                                        </span>
                                      </yt-icon>
                                      {" "}
                                    </ytmusic-inline-badge-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="box-content h-[1.05rem] flex z-1 items-center grow-[9] basis-[1px] overflow-hidden 2xl:hidden" data-cid="n3138">
                                    <div className="box-content flex min-w-0 max-w-[max-content] ml-1 items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden" data-cid="n3139">
                                      <yt-formatted-string class="box-content flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n3140" aria-label="Tee Grizzley • 128 thousand plays" title="Tee Grizzley • 128K plays">
                                        <a className="box-content block -mr-[0.0875rem] pr-[0.0875rem] cursor-pointer 2xl:hidden" data-cid="n3141" data-component="link" href="/channel/UC_CGl-6kaneFydGp5T7NtNA">
                                          Tee Grizzley
                                        </a>
                                        <span className="box-content block 2xl:hidden" data-cid="n3142">
                                          {" • "}
                                        </span>
                                        <span className="box-content block overflow-hidden 2xl:hidden" data-cid="n3143">
                                          128K plays
                                        </span>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                    <div className="box-content h-[1.05rem] flex min-w-0 max-w-[max-content] ml-1 items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden before:content-['•'] before:block before:w-[0.3125rem] before:h-[1.05rem] before:mr-1 before:text-color-003 before:text-sm before:leading-[1.0625rem] 2xl:before:hidden" data-cid="n3144">
                                      <yt-formatted-string class="box-content h-[1.05rem] flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n3145" title="Back Ina Yams">
                                        <a className="box-content h-[1.05rem] block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n3146" data-component="link" href="/browse/MPREb_Fah1wZqD6DI">
                                          Back Ina Yams
                                        </a>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                                <ytmusic-menu-renderer class="box-content w-0 h-9 flex ml-4 items-center basis-0 overflow-hidden 2xl:hidden" data-cid="n3147" aria-label="Action menu">
                                  <div className="box-content w-0 h-9 flex overflow-hidden 2xl:hidden" data-cid="n3148" id="top-level-buttons">
                                    {" "}
                                    <ytmusic-like-button-renderer class="box-content w-0 h-9 block mr-2 overflow-hidden 2xl:hidden" data-cid="n3149">
                                      <yt-button-shape class="box-content inline-block opacity-[1e-06] grow basis-[1e-09px] 2xl:hidden" data-cid="n3150" id="button-shape-like">
                                        {" "}
                                        <button className="w-9 h-9 flex relative rounded-[18px] justify-center items-center shrink-0 text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n3151" data-component="button" aria-label="Like" aria-pressed="false">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n3152" aria-hidden="true">
                                            <span className="box-content w-6 h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3153">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3154">
                                                <div className="box-content block 2xl:hidden" data-cid="n3155">
                                                  <Icon28 cid={"n3156"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n3157" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                      <yt-button-shape class="box-content inline-block opacity-[1e-06] mr-2 grow basis-[1e-09px] 2xl:hidden" data-cid="n3158" id="button-shape-dislike">
                                        {" "}
                                        <button className="w-9 h-9 flex relative rounded-[18px] justify-center items-center shrink-0 text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n3159" data-component="button" aria-label="Dislike" aria-pressed="false">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n3160" aria-hidden="true">
                                            <span className="box-content w-6 h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3161">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3162">
                                                <div className="box-content block 2xl:hidden" data-cid="n3163">
                                                  <Icon29 cid={"n3164"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n3165" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-like-button-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <yt-button-shape class="box-content flex opacity-[1e-06] shrink-0 2xl:hidden" data-cid="n3166" id="button-shape">
                                    <button className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n3167" data-component="button" aria-label="Action menu">
                                      <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n3168" aria-hidden="true">
                                        <span className="box-content w-6 h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3169">
                                          <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3170">
                                            <div className="box-content block 2xl:hidden" data-cid="n3171">
                                              <Icon30 cid={"n3172"} />
                                            </div>
                                          </span>
                                        </span>
                                      </div>
                                      <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n3173" aria-hidden="true" />
                                    </button>
                                  </yt-button-shape>
                                  {" "}
                                </ytmusic-menu-renderer>
                                {" "}
                              </ytmusic-responsive-list-item-renderer>
                              <ytmusic-responsive-list-item-renderer class="box-content w-105 h-12 flex relative px-2 items-center align-top max-md:w-[20.6875rem] 2xl:hidden" data-cid="n3174" role="listitem">
                                {" "}
                                <div className="box-content w-12 h-full block relative mr-4 rounded-xs shrink-0 overflow-hidden 2xl:hidden" data-cid="n3175">
                                  <ytmusic-thumbnail-renderer class="box-content w-12 h-12 block absolute rounded-sm overflow-hidden 2xl:hidden" data-cid="n3176">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 2xl:hidden" data-cid="n3177" id="image">
                                      <img className="box-content w-full h-12 block max-w-full overflow-clip object-contain 2xl:hidden" data-cid="n3178" data-component="image" alt="" id="img" src="/assets/cloned/images/cebcaadab891.jpg" width="56" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-12 h-12 block absolute opacity-[1e-06] 2xl:hidden" data-cid="n3179">
                                    <ytmusic-background-overlay-renderer class="box-content w-12 h-12 block absolute top-0 left-0 2xl:hidden" style={{ backgroundImage: "linear-gradient(var(--clr-3), var(--clr-3))" }} data-cid="n3180" id="background" />
                                    {" "}
                                    <div className="box-content w-12 h-full flex absolute top-0 left-0 justify-center items-center 2xl:hidden" data-cid="n3181" id="content">
                                      <ytmusic-play-button-renderer class="box-content block relative 2xl:hidden" data-cid="n3182" data-component="button" aria-disabled="false" aria-label="Play Tom Cruise vs Evel Knievel" id="play-button" role="button">
                                        <div className="box-content w-8 h-8 flex rounded-[50%] justify-center items-center overflow-hidden cursor-pointer 2xl:hidden" data-cid="n3183">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3184">
                                            <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3185">
                                              <div className="box-content block 2xl:hidden" data-cid="n3186">
                                                <Icon23 cid={"n3187"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content h-[2.2875rem] flex flex-wrap items-center flex-1 overflow-hidden 2xl:hidden" data-cid="n3188">
                                  <div className="box-content h-[1.05rem] flex mb-[0.1875rem] justify-between grow-[6] basis-full overflow-hidden 2xl:hidden" data-cid="n3189">
                                    <yt-formatted-string class="box-content h-[1.05rem] flex overflow-hidden text-sm font-medium leading-[1.0625rem] whitespace-pre 2xl:hidden" data-cid="n3190" title="Tom Cruise vs Evel Knievel">
                                      <a className="box-content h-[1.05rem] block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n3191" data-component="link" href={"/watch?v=jlQXhqbbxXI&list=RDAMVMjlQXhqbbxXI"}>
                                        Tom Cruise vs Evel Knievel
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="box-content h-[1.05rem] flex z-1 items-center grow-[9] basis-[1px] overflow-hidden 2xl:hidden" data-cid="n3192">
                                    <div className="box-content h-[1.05rem] flex min-w-0 max-w-[max-content] items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden" data-cid="n3193">
                                      <yt-formatted-string class="box-content h-[1.05rem] flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n3194" aria-label="Epic Rap Battles of History • 1 million plays" title="Epic Rap Battles of History • 1M plays">
                                        <a className="box-content block -mr-[0.0875rem] pr-[0.0875rem] cursor-pointer 2xl:hidden" data-cid="n3195" data-component="link" href="/channel/UCUpnQBLY_bJsJku8Gy2_rkg">
                                          Epic Rap Battles of History
                                        </a>
                                        <span className="box-content block 2xl:hidden" data-cid="n3196">
                                          {" • "}
                                        </span>
                                        <span className="box-content w-0 h-[1.05rem] block overflow-hidden 2xl:hidden" data-cid="n3197">
                                          1M plays
                                        </span>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                    <div className="box-content h-[1.05rem] flex min-w-0 max-w-[max-content] ml-1 items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden before:content-['•'] before:block before:w-[0.3125rem] before:h-[1.05rem] before:mr-1 before:text-color-003 before:text-sm before:leading-[1.0625rem] 2xl:before:hidden" data-cid="n3198">
                                      <yt-formatted-string class="box-content h-[1.05rem] flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n3199" title="Tom Cruise vs Evel Knievel">
                                        <a className="box-content h-[1.05rem] block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n3200" data-component="link" href="/browse/MPREb_M0ob9BWJmG1">
                                          Tom Cruise vs Evel Knievel
                                        </a>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                                <ytmusic-menu-renderer class="box-content w-0 h-9 flex ml-4 items-center basis-0 overflow-hidden 2xl:hidden" data-cid="n3201" aria-label="Action menu">
                                  <div className="box-content w-0 h-9 flex overflow-hidden 2xl:hidden" data-cid="n3202" id="top-level-buttons">
                                    {" "}
                                    <ytmusic-like-button-renderer class="box-content w-0 h-9 block mr-2 overflow-hidden 2xl:hidden" data-cid="n3203">
                                      <yt-button-shape class="box-content inline-block opacity-[1e-06] grow basis-[1e-09px] 2xl:hidden" data-cid="n3204" id="button-shape-like">
                                        {" "}
                                        <button className="w-9 h-9 flex relative rounded-[18px] justify-center items-center shrink-0 text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n3205" data-component="button" aria-label="Like" aria-pressed="false">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n3206" aria-hidden="true">
                                            <span className="box-content w-6 h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3207">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3208">
                                                <div className="box-content block 2xl:hidden" data-cid="n3209">
                                                  <Icon28 cid={"n3210"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n3211" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                      <yt-button-shape class="box-content inline-block opacity-[1e-06] mr-2 grow basis-[1e-09px] 2xl:hidden" data-cid="n3212" id="button-shape-dislike">
                                        {" "}
                                        <button className="w-9 h-9 flex relative rounded-[18px] justify-center items-center shrink-0 text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n3213" data-component="button" aria-label="Dislike" aria-pressed="false">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n3214" aria-hidden="true">
                                            <span className="box-content w-6 h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3215">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3216">
                                                <div className="box-content block 2xl:hidden" data-cid="n3217">
                                                  <Icon29 cid={"n3218"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n3219" aria-hidden="true" />
                                        </button>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-like-button-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <yt-button-shape class="box-content flex opacity-[1e-06] shrink-0 2xl:hidden" data-cid="n3220" id="button-shape">
                                    <button className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center cursor-pointer 2xl:hidden" data-cid="n3221" data-component="button" aria-label="Action menu">
                                      <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n3222" aria-hidden="true">
                                        <span className="box-content w-6 h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3223">
                                          <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3224">
                                            <div className="box-content block 2xl:hidden" data-cid="n3225">
                                              <Icon30 cid={"n3226"} />
                                            </div>
                                          </span>
                                        </span>
                                      </div>
                                      <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n3227" aria-hidden="true" />
                                    </button>
                                  </yt-button-shape>
                                  {" "}
                                </ytmusic-menu-renderer>
                                {" "}
                              </ytmusic-responsive-list-item-renderer>
                              <ytmusic-responsive-list-item-renderer class="box-content w-105 h-12 flex relative px-2 items-center align-top max-md:w-[20.6875rem] 2xl:hidden" data-cid="n3228" role="listitem">
                                {" "}
                                <div className="box-content w-12 h-full block relative mr-4 rounded-xs shrink-0 overflow-hidden max-lg:pointer-events-none 2xl:hidden" data-cid="n3229">
                                  <ytmusic-thumbnail-renderer class="box-content w-12 h-12 block absolute rounded-sm overflow-hidden 2xl:hidden" data-cid="n3230">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 max-lg:pointer-events-none 2xl:hidden" data-cid="n3231" id="image">
                                      <img className="box-content w-full h-12 block max-w-full overflow-clip object-contain max-lg:pointer-events-none 2xl:hidden" data-cid="n3232" data-component="image" alt="" id="img" src="/assets/cloned/images/07816196cf1f.jpg" width="56" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-12 h-12 block absolute opacity-[1e-06] max-lg:hidden 2xl:hidden" data-cid="n3233">
                                    <ytmusic-background-overlay-renderer class="box-content w-12 h-12 block absolute top-0 left-0 max-lg:hidden 2xl:hidden" style={{ backgroundImage: "linear-gradient(var(--clr-3), var(--clr-3))" }} data-cid="n3234" id="background" />
                                    {" "}
                                    <div className="box-content w-12 h-full flex absolute top-0 left-0 justify-center items-center max-lg:hidden 2xl:hidden" data-cid="n3235" id="content">
                                      <ytmusic-play-button-renderer class="box-content block relative max-lg:hidden 2xl:hidden" data-cid="n3236" data-component="button" aria-disabled="false" aria-label="Play SERIOUS — THE COMMISSION" id="play-button" role="button">
                                        <div className="box-content w-8 h-8 flex rounded-[50%] justify-center items-center overflow-hidden cursor-pointer max-lg:hidden 2xl:hidden" data-cid="n3237">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle max-lg:hidden 2xl:hidden" data-cid="n3238">
                                            <span className="box-content flex justify-center items-center max-lg:hidden 2xl:hidden" data-cid="n3239">
                                              <div className="box-content block max-lg:hidden 2xl:hidden" data-cid="n3240">
                                                <Icon31 cid={"n3241"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content h-[2.2875rem] flex flex-wrap items-center flex-1 overflow-hidden 2xl:hidden" data-cid="n3242">
                                  <div className="box-content h-[1.05rem] flex mb-[0.1875rem] justify-between grow-[6] basis-full overflow-hidden 2xl:hidden" data-cid="n3243">
                                    <yt-formatted-string class="box-content h-[1.05rem] flex overflow-hidden text-sm font-medium leading-[1.0625rem] whitespace-pre 2xl:hidden" data-cid="n3244" title="SERIOUS — THE COMMISSION">
                                      <a className="box-content h-[1.05rem] block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n3245" data-component="link" href={"/watch?v=r95jr7fewQs&list=RDAMVMr95jr7fewQs"}>
                                        SERIOUS — THE COMMISSION
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="box-content flex items-center 2xl:hidden" data-cid="n3246" id="stacked-layout-badges">
                                    <ytmusic-inline-badge-renderer class="box-content w-4 h-4 block 2xl:hidden" data-cid="n3247">
                                      <yt-icon class="box-content block relative justify-center items-center align-middle text-color-003 2xl:hidden" data-cid="n3248" aria-label="Explicit" title="Explicit">
                                        <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3249">
                                          <div className="box-content block 2xl:hidden" data-cid="n3250">
                                            <Icon32 cid={"n3251"} />
                                          </div>
                                        </span>
                                      </yt-icon>
                                      {" "}
                                    </ytmusic-inline-badge-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="box-content h-[1.05rem] flex z-1 items-center grow-[9] basis-[1px] overflow-hidden 2xl:hidden" data-cid="n3252">
                                    <div className="box-content h-[1.05rem] flex min-w-0 max-w-[max-content] ml-1 items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden" data-cid="n3253" aria-label={"YTB Fatt & Moneybagg Yo • 807 thousand plays"} role="text">
                                      <yt-formatted-string class="box-content h-[1.05rem] flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n3254" aria-hidden="true" aria-label={"YTB Fatt & Moneybagg Yo • 807 thousand plays"} title={"YTB Fatt & Moneybagg Yo • 807K plays"}>
                                        <span className="box-content block 2xl:hidden" data-cid="n3255">
                                          {"YTB Fatt & Moneybagg Yo"}
                                        </span>
                                        <span className="box-content block 2xl:hidden" data-cid="n3256">
                                          {" • "}
                                        </span>
                                        <span className="box-content h-[1.05rem] block overflow-hidden 2xl:hidden" data-cid="n3257">
                                          807K plays
                                        </span>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                              </ytmusic-responsive-list-item-renderer>
                              <ytmusic-responsive-list-item-renderer class="box-content w-105 h-12 flex relative px-2 items-center align-top max-md:w-[20.6875rem] max-md:pr-4 md:max-lg:pr-14 2xl:hidden" data-cid="n3258" role="listitem">
                                {" "}
                                <div className="box-content w-12 h-full block relative mr-4 rounded-xs shrink-0 overflow-hidden max-lg:pointer-events-none 2xl:hidden" data-cid="n3259">
                                  <ytmusic-thumbnail-renderer class="box-content w-12 h-12 block absolute rounded-sm overflow-hidden 2xl:hidden" data-cid="n3260">
                                    <yt-img-shadow class="box-content flex items-center shrink-0 max-lg:pointer-events-none 2xl:hidden" data-cid="n3261" id="image">
                                      <img className="box-content w-full h-12 block max-w-full overflow-clip object-contain max-lg:pointer-events-none 2xl:hidden" data-cid="n3262" data-component="image" alt="" id="img" src="/assets/cloned/images/fb3d6ed0ee8e.jpg" width="56" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-12 h-12 block absolute opacity-[1e-06] max-lg:hidden 2xl:hidden" data-cid="n3263">
                                    <ytmusic-background-overlay-renderer class="box-content w-12 h-12 block absolute top-0 left-0 max-lg:hidden 2xl:hidden" style={{ backgroundImage: "linear-gradient(var(--clr-3), var(--clr-3))" }} data-cid="n3264" id="background" />
                                    {" "}
                                    <div className="box-content w-12 h-full flex absolute top-0 left-0 justify-center items-center max-lg:hidden 2xl:hidden" data-cid="n3265" id="content">
                                      <ytmusic-play-button-renderer class="box-content block relative max-lg:hidden 2xl:hidden" data-cid="n3266" data-component="button" aria-disabled="false" aria-label="Play Purple Switch" id="play-button" role="button">
                                        <div className="box-content w-8 h-8 flex rounded-[50%] justify-center items-center overflow-hidden cursor-pointer max-lg:hidden 2xl:hidden" data-cid="n3267">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle max-lg:hidden 2xl:hidden" data-cid="n3268">
                                            <span className="box-content flex justify-center items-center max-lg:hidden 2xl:hidden" data-cid="n3269">
                                              <div className="box-content block max-lg:hidden 2xl:hidden" data-cid="n3270">
                                                <Icon31 cid={"n3271"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content h-[2.2875rem] flex flex-wrap items-center flex-1 overflow-hidden 2xl:hidden" data-cid="n3272">
                                  <div className="box-content h-[1.05rem] flex mb-[0.1875rem] justify-between grow-[6] basis-full overflow-hidden 2xl:hidden" data-cid="n3273">
                                    <yt-formatted-string class="box-content h-[1.05rem] flex overflow-hidden text-sm font-medium leading-[1.0625rem] whitespace-pre 2xl:hidden" data-cid="n3274" title="Purple Switch">
                                      <a className="box-content h-[1.05rem] block -mr-[0.0875rem] pr-[0.0875rem] overflow-hidden cursor-pointer 2xl:hidden" data-cid="n3275" data-component="link" href={"/watch?v=YQBlS9lO0HQ&list=RDAMVMYQBlS9lO0HQ"}>
                                        Purple Switch
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="box-content flex items-center 2xl:hidden" data-cid="n3276" id="stacked-layout-badges">
                                    <ytmusic-inline-badge-renderer class="box-content w-4 h-4 block 2xl:hidden" data-cid="n3277">
                                      <yt-icon class="box-content block relative justify-center items-center align-middle text-color-003 2xl:hidden" data-cid="n3278" aria-label="Explicit" title="Explicit">
                                        <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3279">
                                          <div className="box-content block 2xl:hidden" data-cid="n3280">
                                            <Icon32 cid={"n3281"} />
                                          </div>
                                        </span>
                                      </yt-icon>
                                      {" "}
                                    </ytmusic-inline-badge-renderer>
                                    {" "}
                                  </div>
                                  {" "}
                                  <div className="box-content flex z-1 items-center grow-[9] basis-[1px] overflow-hidden 2xl:hidden" data-cid="n3282">
                                    <div className="box-content flex min-w-0 max-w-[max-content] ml-1 items-center flex-1 text-color-003 text-sm leading-[1.0625rem] 2xl:hidden" data-cid="n3283">
                                      <yt-formatted-string class="box-content flex min-w-0 flex-1 overflow-hidden whitespace-pre 2xl:hidden" data-cid="n3284" aria-label="FullyChop • 520 thousand plays" title="FullyChop • 520K plays">
                                        <a className="box-content block -mr-[0.0875rem] pr-[0.0875rem] cursor-pointer 2xl:hidden" data-cid="n3285" data-component="link" href="/channel/UChgYRK4ZUwOwiX19d3-CFqw">
                                          FullyChop
                                        </a>
                                        <span className="box-content block 2xl:hidden" data-cid="n3286">
                                          {" • "}
                                        </span>
                                        <span className="box-content block overflow-hidden 2xl:hidden" data-cid="n3287">
                                          520K plays
                                        </span>
                                      </yt-formatted-string>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                              </ytmusic-responsive-list-item-renderer>
                            </div>
                            {" "}
                          </ytmusic-carousel>
                          {" "}
                        </div>
                        {" "}
                      </ytmusic-carousel-shelf-renderer>
                      <ytmusic-carousel-shelf-renderer class="box-content h-[23.3875rem] block max-md:h-[20.6875rem] md:max-lg:h-[22.3875rem] 2xl:h-[27.9rem]" data-cid="n3288">
                        <div className="box-content block" data-cid="n3289">
                          <div className="box-content flex max-w-249 mx-26.5 pt-8 justify-between gap-6 max-md:max-w-[21.4375rem] max-md:mx-4 max-lg:pt-4 max-md:gap-2 md:max-lg:max-w-143 md:max-lg:mx-15.5 2xl:max-w-367" data-cid="n3290" id="header-group">
                            <ytmusic-carousel-shelf-basic-header-renderer class="box-content flex items-center grow" data-cid="n3291">
                              {" "}
                              <div className="box-content w-full h-full block" data-cid="n3292" id="content-group">
                                {" "}
                                <div className="box-content h-full flex justify-between items-end gap-2" data-cid="n3293" id="details">
                                  <yt-formatted-string class="box-content max-w-140 max-h-[4.2rem] overflow-hidden [font-family:'YouTube_Sans',_Roboto,_'Noto_Naskh_Arabic_UI',_Arial,_sans-serif] text-[1.75rem] font-bold leading-[2.125rem] line-clamp-2 max-lg:max-w-100 max-lg:max-h-[3.6rem] max-lg:text-2xl max-lg:leading-[1.8125rem] 2xl:max-w-200 2xl:max-h-27 2xl:text-[2.8125rem] 2xl:leading-13.5" data-cid="n3294" aria-level="2" role="heading">
                                    <a className="box-content inline-block cursor-pointer whitespace-nowrap" data-cid="n3295" data-component="link" dir="auto" href="/new_releases/albums">
                                      New releases
                                    </a>
                                  </yt-formatted-string>
                                  {" "}
                                  <div className="box-content flex items-center" data-cid="n3296" id="button-group">
                                    {" "}
                                    <div className="box-content block" data-cid="n3297" id="more-content-button">
                                      <yt-button-renderer class="box-content inline-block" data-cid="n3298">
                                        <yt-button-shape class="box-content flex grow basis-[1e-09px]" data-cid="n3299">
                                          <button className="h-9 border border-solid border-border flex relative min-w-0 px-[0.9375rem] rounded-[18px] justify-center items-center grow basis-[1e-09px] text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center whitespace-nowrap text-nowrap cursor-pointer max-md:h-6 max-md:px-[0.4375rem] max-md:rounded-xl max-md:text-xs max-md:leading-6" data-cid="n3300" data-component="button" aria-label="More">
                                            <div className="box-content h-full block overflow-hidden" data-cid="n3301">
                                              <span className="box-content inline" data-cid="n3302" role="text">
                                                More
                                              </span>
                                            </div>
                                            <yt-touch-feedback-shape class="box-content w-[3.9375rem] h-8.5 block absolute top-0 left-0 min-w-0 rounded-[18px] max-md:w-10.5 max-md:h-5.5 max-md:rounded-xl" data-cid="n3303" aria-hidden="true" />
                                          </button>
                                        </yt-button-shape>
                                      </yt-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                  </div>
                                  {" "}
                                </div>
                                {" "}
                              </div>
                              {" "}
                            </ytmusic-carousel-shelf-basic-header-renderer>
                            {" "}
                            <div className="box-content flex items-end gap-4 max-md:gap-2" data-cid="n3304">
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative opacity-40 p-2 rounded-[50%] text-muted-foreground text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n3305" disabled id="previous-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center pointer-events-none" data-cid="n3306" data-component="button" aria-label="Previous" disabled id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle pointer-events-none" data-cid="n3307">
                                    <span className="box-content flex justify-center items-center pointer-events-none" data-cid="n3308">
                                      <div className="box-content block pointer-events-none" data-cid="n3309">
                                        <Icon12 cid={"n3310"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n3311" id="interaction" />
                              </yt-icon-button>
                              {" "}
                              <yt-icon-button class="w-9 h-9 border border-solid border-border block relative p-2 rounded-[50%] text-[0rem] leading-[normal] max-md:w-6 max-md:h-6 max-md:p-0.5" data-cid="n3312" id="next-items-button">
                                <button className="inline-block align-middle [font-family:Arial] text-[0.8125rem] leading-0 text-center cursor-pointer" data-cid="n3313" data-component="button" aria-label="Next" id="button">
                                  {" "}
                                  <yt-icon class="box-content inline-flex relative justify-center items-center align-middle" data-cid="n3314">
                                    <span className="box-content flex justify-center items-center" data-cid="n3315">
                                      <div className="box-content block" data-cid="n3316">
                                        <Icon17 cid={"n3317"} />
                                      </div>
                                    </span>
                                  </yt-icon>
                                  {" "}
                                </button>
                                <yt-interaction class="box-content w-8.5 h-8.5 block absolute top-0 left-0 pointer-events-none max-md:w-5.5 max-md:h-5.5" data-cid="n3318" id="interaction" />
                              </yt-icon-button>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <ytmusic-carousel class="box-content h-[16.6375rem] block relative z-0 mt-4 mb-6 overflow-hidden max-md:h-[15.3875rem] 2xl:h-[20.025rem]" data-cid="n3319" id="ytmusic-carousel">
                            <div className="box-content w-249 h-full grid relative mx-26.5 gap-y-4 gap-x-6 grid-cols-[180px_180px_180px_180px_180px_180px_180px_180px_180px_180px] grid-rows-[266.2px] [grid-auto-flow:column] overflow-x-scroll overflow-y-hidden whitespace-nowrap text-nowrap [list-style-type:disc] list-outside max-md:w-[23.4375rem] max-lg:gap-x-4 max-md:grid-cols-[176px_160px_160px_160px_160px_160px_160px_160px_160px_176px] max-md:grid-rows-[246.2px] max-lg:mx-0 md:max-lg:w-174 md:max-lg:grid-cols-[236px_180px_180px_180px_180px_180px_180px_180px_180px_236px] 2xl:w-367 2xl:grid-cols-[224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px_224.656px] 2xl:grid-rows-[320.4px]" data-cid="n3320" id="items">
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[16.6375rem] block align-top max-md:w-40 max-md:h-[15.3875rem] max-md:pl-4 md:max-lg:pl-14 2xl:w-[224.7px] 2xl:h-[20.025rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n3321" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px]" data-cid="n3322" data-component="link" href="/browse/MPREb_j9CYvyEeT73" title="serena joy">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n3323">
                                    <yt-img-shadow class="box-content flex items-center shrink-0" data-cid="n3324" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem]" data-cid="n3325" data-component="image" alt="" id="img" src="/assets/cloned/images/6b626eaedf91.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n3326" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none" data-cid="n3327" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:hidden" data-cid="n3328">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:hidden" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n3329" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 2xl:hidden" data-cid="n3330" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] 2xl:hidden" data-cid="n3331" data-component="button" aria-disabled="false" aria-label="Play serena joy" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 2xl:hidden" data-cid="n3332">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3333">
                                            <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3334">
                                              <div className="box-content block 2xl:hidden" data-cid="n3335">
                                                <Icon23 cid={"n3336"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden 2xl:hidden" data-cid="n3337" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 2xl:hidden" data-cid="n3338" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center 2xl:hidden" data-cid="n3339" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n3340" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3341">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3342">
                                                <div className="box-content block 2xl:hidden" data-cid="n3343">
                                                  <Icon26 cid={"n3344"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n3345" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content h-[1.9125rem] block absolute right-[8.8375rem] bottom-2 left-2 max-md:h-[1.7rem] max-md:right-[7.8rem] 2xl:h-[2.3875rem] 2xl:right-[178.5px]" data-cid="n3346" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[2.7875rem] flex mt-2 flex-col 2xl:h-[3.0875rem]" data-cid="n3347">
                                  <div className="box-content max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:max-h-[2.4rem]" data-cid="n3348">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n3349">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap" data-cid="n3350" data-component="link" dir="auto" href="/browse/MPREb_j9CYvyEeT73">
                                        serena joy
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[1.05rem] flex relative mt-[0.1875rem] items-center 2xl:h-[1.2rem]" data-cid="n3351">
                                    {" "}
                                    <span className="box-content w-5 h-4 flex absolute top-0 min-w-0 items-center transform-[matrix(1,0,0,1,0,0.4)] 2xl:transform-[matrix(1,0,0,1,0,1.6)]" data-cid="n3352" id="inline-badges">
                                      <ytmusic-inline-badge-renderer class="box-content w-4 h-4 block mr-1" data-cid="n3353">
                                        <yt-icon class="box-content block relative justify-center items-center align-middle text-color-003" data-cid="n3354" aria-label="Explicit" title="Explicit">
                                          <span className="box-content flex justify-center items-center" data-cid="n3355">
                                            <div className="box-content block" data-cid="n3356">
                                              <Icon33 cid={"n3357"} />
                                            </div>
                                          </span>
                                        </yt-icon>
                                        {" "}
                                      </ytmusic-inline-badge-renderer>
                                    </span>
                                    {" "}
                                    <yt-formatted-string class="box-content h-[1.05rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal indent-5 line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n3358">
                                      <span className="box-content inline" data-cid="n3359">
                                        Single
                                      </span>
                                      <span className="box-content inline" data-cid="n3360">
                                        {" • "}
                                      </span>
                                      <a className="box-content inline cursor-pointer" data-cid="n3361" data-component="link" href="/channel/UCE5XNpliPM-SmyFEp61tL_g">
                                        Olivia Rodrigo
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n3362" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[16.6375rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[20.025rem] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n3363" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px]" data-cid="n3364" data-component="link" href="/browse/MPREb_7EoMOzYWUXf" title="Having One Now">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n3365">
                                    <yt-img-shadow class="box-content flex items-center shrink-0" data-cid="n3366" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem]" data-cid="n3367" data-component="image" alt="" id="img" src="/assets/cloned/images/a42a0d3ecf0f.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n3368" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none" data-cid="n3369" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:hidden" data-cid="n3370">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:hidden" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n3371" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 2xl:hidden" data-cid="n3372" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] 2xl:hidden" data-cid="n3373" data-component="button" aria-disabled="false" aria-label="Play Having One Now" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 2xl:hidden" data-cid="n3374">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3375">
                                            <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3376">
                                              <div className="box-content block 2xl:hidden" data-cid="n3377">
                                                <Icon23 cid={"n3378"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden 2xl:hidden" data-cid="n3379" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 2xl:hidden" data-cid="n3380" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center 2xl:hidden" data-cid="n3381" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n3382" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3383">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3384">
                                                <div className="box-content block 2xl:hidden" data-cid="n3385">
                                                  <Icon26 cid={"n3386"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n3387" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content h-[1.9125rem] block absolute right-[8.8375rem] bottom-2 left-2 max-md:h-[1.7rem] max-md:right-[7.8rem] 2xl:h-[2.3875rem] 2xl:right-[178.5px]" data-cid="n3388" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[2.7875rem] flex mt-2 flex-col 2xl:h-[3.0875rem]" data-cid="n3389">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n3390">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n3391">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap" data-cid="n3392" data-component="link" dir="auto" href="/browse/MPREb_7EoMOzYWUXf">
                                        Having One Now
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content flex mt-[0.1875rem] items-center 2xl:relative" data-cid="n3393">
                                    {" "}
                                    <span className="box-content w-0 h-0 flex items-center transform-[none] 2xl:w-5 2xl:h-4 2xl:absolute 2xl:top-0 2xl:min-w-0 2xl:transform-[matrix(1,0,0,1,0,1.6)]" data-cid="n3394" id="inline-badges">
                                      <ytmusic-inline-badge-renderer class="hidden 2xl:box-content 2xl:w-4 2xl:h-4 2xl:block 2xl:mr-1" data-cid="n3395">
                                        <yt-icon class="hidden 2xl:box-content 2xl:block 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle 2xl:text-color-003" data-cid="n3396" aria-label="Explicit" title="Explicit">
                                          <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n3397">
                                            <div className="hidden 2xl:box-content 2xl:block" data-cid="n3398">
                                              <Icon20 cid={"n3399"} />
                                            </div>
                                          </span>
                                        </yt-icon>
                                        {" "}
                                      </ytmusic-inline-badge-renderer>
                                    </span>
                                    {" "}
                                    <yt-formatted-string class="box-content max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] 2xl:indent-5" data-cid="n3400">
                                      <span className="box-content inline" data-cid="n3401">
                                        Single
                                      </span>
                                      <span className="box-content inline" data-cid="n3402">
                                        {" • "}
                                      </span>
                                      <a className="box-content inline-block cursor-pointer 2xl:inline" data-cid="n3403" data-component="link" href="/channel/UCSFw4d6EB0jTTwuMoQW95eg">
                                        Gavin Adcock
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n3404" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[16.6375rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[20.025rem]" data-cid="n3405" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px]" data-cid="n3406" data-component="link" href="/browse/MPREb_RwIc47ZAYZM" title="Qué Andas Haciendo">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n3407">
                                    <yt-img-shadow class="box-content flex items-center shrink-0" data-cid="n3408" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem]" data-cid="n3409" data-component="image" alt="" id="img" src="/assets/cloned/images/f375c6615c21.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none max-md:w-40 max-md:h-40 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n3410" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none" data-cid="n3411" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 max-md:w-40 max-md:h-40 2xl:hidden" data-cid="n3412">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] max-md:w-40 max-md:h-40 2xl:hidden" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n3413" id="background" />
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 2xl:hidden" data-cid="n3414" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] 2xl:hidden" data-cid="n3415" data-component="button" aria-disabled="false" aria-label="Play Qué Andas Haciendo" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 2xl:hidden" data-cid="n3416">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3417">
                                            <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3418">
                                              <div className="box-content block 2xl:hidden" data-cid="n3419">
                                                <Icon23 cid={"n3420"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden 2xl:hidden" data-cid="n3421" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 2xl:hidden" data-cid="n3422" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center 2xl:hidden" data-cid="n3423" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n3424" aria-hidden="true">
                                            <span className="box-content h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3425">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3426">
                                                <div className="box-content block 2xl:hidden" data-cid="n3427">
                                                  <Icon26 cid={"n3428"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n3429" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem]" data-cid="n3430" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content flex mt-2 flex-col" data-cid="n3431">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n3432">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n3433">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap" data-cid="n3434" data-component="link" dir="auto" href="/browse/MPREb_RwIc47ZAYZM">
                                        Qué Andas Haciendo
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content flex mt-[0.1875rem] items-center 2xl:relative" data-cid="n3435">
                                    {" "}
                                    <span className="box-content w-0 h-0 flex items-center transform-[none] 2xl:w-5 2xl:h-4 2xl:absolute 2xl:top-0 2xl:min-w-0 2xl:transform-[matrix(1,0,0,1,0,1.6)]" data-cid="n3436" id="inline-badges">
                                      <ytmusic-inline-badge-renderer class="hidden 2xl:box-content 2xl:w-4 2xl:h-4 2xl:block 2xl:mr-1" data-cid="n3437">
                                        <yt-icon class="hidden 2xl:box-content 2xl:block 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle 2xl:text-color-003" data-cid="n3438" aria-label="Explicit" title="Explicit">
                                          <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n3439">
                                            <div className="hidden 2xl:box-content 2xl:block" data-cid="n3440">
                                              <Icon20 cid={"n3441"} />
                                            </div>
                                          </span>
                                        </yt-icon>
                                        {" "}
                                      </ytmusic-inline-badge-renderer>
                                    </span>
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] 2xl:indent-5" data-cid="n3442">
                                      <span className="box-content inline" data-cid="n3443">
                                        Single
                                      </span>
                                      <span className="box-content inline" data-cid="n3444">
                                        {" • "}
                                      </span>
                                      <a className="box-content inline-block cursor-pointer 2xl:inline" data-cid="n3445" data-component="link" href="/channel/UCGr3AcxG5Ubp4kByu7l5SSA">
                                        Carín León
                                      </a>
                                      <span className="box-content inline 2xl:hidden" data-cid="n3446">
                                        {" & "}
                                      </span>
                                      <a className="box-content inline-block cursor-pointer 2xl:hidden" data-cid="n3447" data-component="link" href="/channel/UCV7iyzONDHopAdixwJ4zUNA">
                                        Ke Personajes
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n3448" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[16.6375rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[20.025rem]" data-cid="n3449" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px]" data-cid="n3450" data-component="link" href="/browse/MPREb_fylklEw93Dp" title="All Eyes on Shiest">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n3451">
                                    <yt-img-shadow class="box-content flex items-center shrink-0" data-cid="n3452" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem]" data-cid="n3453" data-component="image" alt="" id="img" src="/assets/cloned/images/61db777bcd5d.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n3454" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none" data-cid="n3455" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 2xl:hidden" data-cid="n3456">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] 2xl:hidden" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n3457" id="background" />
                                    {" "}
                                    <div className="box-content w-45 h-full block absolute top-0 left-0 2xl:hidden" data-cid="n3458" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] 2xl:hidden" data-cid="n3459" data-component="button" aria-disabled="false" aria-label="Play All Eyes on Shiest" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 2xl:hidden" data-cid="n3460">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3461">
                                            <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3462">
                                              <div className="box-content block 2xl:hidden" data-cid="n3463">
                                                <Icon34 cid={"n3464"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden 2xl:hidden" data-cid="n3465" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 2xl:hidden" data-cid="n3466" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center 2xl:hidden" data-cid="n3467" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n3468" aria-hidden="true">
                                            <span className="box-content w-6 h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3469">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3470">
                                                <div className="box-content block 2xl:hidden" data-cid="n3471">
                                                  <Icon30 cid={"n3472"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n3473" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem]" data-cid="n3474" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[2.7875rem] flex mt-2 flex-col 2xl:h-[3.0875rem]" data-cid="n3475">
                                  <div className="box-content h-[1.05rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n3476">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n3477">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap" data-cid="n3478" data-component="link" dir="auto" href="/browse/MPREb_fylklEw93Dp">
                                        All Eyes on Shiest
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content flex relative mt-[0.1875rem] items-center 2xl:static 2xl:inset-auto" data-cid="n3479">
                                    {" "}
                                    <span className="box-content w-5 h-full flex absolute top-0 min-w-0 items-center transform-[matrix(1,0,0,1,0,0.4)]" data-cid="n3480" id="inline-badges">
                                      <ytmusic-inline-badge-renderer class="box-content w-4 h-4 block mr-1 2xl:hidden" data-cid="n3481">
                                        <yt-icon class="box-content block relative justify-center items-center align-middle text-color-003 2xl:hidden" data-cid="n3482" aria-label="Explicit" title="Explicit">
                                          <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3483">
                                            <div className="box-content block 2xl:hidden" data-cid="n3484">
                                              <Icon27 cid={"n3485"} />
                                            </div>
                                          </span>
                                        </yt-icon>
                                        {" "}
                                      </ytmusic-inline-badge-renderer>
                                    </span>
                                    {" "}
                                    <yt-formatted-string class="box-content max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal indent-5 line-clamp-2 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] 2xl:indent-[inherit]" data-cid="n3486">
                                      <span className="box-content inline" data-cid="n3487">
                                        Album
                                      </span>
                                      <span className="box-content inline" data-cid="n3488">
                                        {" • "}
                                      </span>
                                      <a className="box-content inline cursor-pointer 2xl:inline-block" data-cid="n3489" data-component="link" href="/channel/UCHP-7P6ChK4-jiFoz62RcUg">
                                        Pooh Shiesty
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n3490" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[16.6375rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[20.025rem]" data-cid="n3491" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px]" data-cid="n3492" data-component="link" href="/browse/MPREb_eEBA2q39pWD" title="La Cherokee">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n3493">
                                    <yt-img-shadow class="box-content flex items-center shrink-0" data-cid="n3494" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem]" data-cid="n3495" data-component="image" alt="" id="img" src="/assets/cloned/images/0470cb480b93.jpg" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px] focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[3px]" data-cid="n3496" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none" data-cid="n3497" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <ytmusic-item-thumbnail-overlay-renderer class="box-content w-45 h-45 block absolute left-0 2xl:hidden" data-cid="n3498">
                                    <ytmusic-background-overlay-renderer class="box-content w-45 h-45 block absolute top-0 left-0 opacity-[1e-06] 2xl:hidden" style={{ backgroundImage: "linear-gradient(var(--clr-1), var(--clr-2), var(--clr-2))" }} data-cid="n3499" id="background" />
                                    {" "}
                                    <div className="box-content w-45 h-full block absolute top-0 left-0 2xl:hidden" data-cid="n3500" id="content">
                                      <ytmusic-play-button-renderer class="box-content w-10 h-10 block absolute right-3 bottom-3 opacity-[1e-06] 2xl:hidden" data-cid="n3501" data-component="button" aria-disabled="false" aria-label="Play La Cherokee" id="play-button" role="button">
                                        <div className="box-content w-10 h-10 flex rounded-[50%] justify-center items-center overflow-hidden bg-color-004 2xl:hidden" data-cid="n3502">
                                          {" "}
                                          <yt-icon class="box-content flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3503">
                                            <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3504">
                                              <div className="box-content block 2xl:hidden" data-cid="n3505">
                                                <Icon34 cid={"n3506"} />
                                              </div>
                                            </span>
                                          </yt-icon>
                                          {" "}
                                        </div>
                                        {" "}
                                      </ytmusic-play-button-renderer>
                                      {" "}
                                    </div>
                                    {" "}
                                    <ytmusic-menu-renderer class="box-content w-9 h-9 flex absolute top-2 right-1 opacity-[1e-06] justify-center items-center overflow-hidden 2xl:hidden" data-cid="n3507" aria-haspopup="menu" aria-label="Action menu">
                                      {" "}
                                      <yt-button-shape class="box-content flex shrink-0 2xl:hidden" data-cid="n3508" id="button-shape">
                                        <div className="basis-full shrink-0 h-9 flex relative min-w-0 rounded-[18px] justify-center items-center text-color-002 [font-family:Roboto,_Arial,_sans-serif] text-sm font-medium leading-9 text-center 2xl:hidden" data-cid="n3509" data-component="button" aria-label="Action menu">
                                          <div className="box-content w-6 h-6 block leading-0 2xl:hidden" data-cid="n3510" aria-hidden="true">
                                            <span className="box-content w-6 h-6 inline-flex relative justify-center items-center align-middle 2xl:hidden" data-cid="n3511">
                                              <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3512">
                                                <div className="box-content block 2xl:hidden" data-cid="n3513">
                                                  <Icon30 cid={"n3514"} />
                                                </div>
                                              </span>
                                            </span>
                                          </div>
                                          <yt-touch-feedback-shape class="box-content w-9 h-9 block absolute top-0 left-0 min-w-0 rounded-[18px] 2xl:hidden" data-cid="n3515" aria-hidden="true" />
                                        </div>
                                      </yt-button-shape>
                                      {" "}
                                    </ytmusic-menu-renderer>
                                    {" "}
                                  </ytmusic-item-thumbnail-overlay-renderer>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem]" data-cid="n3516" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content flex mt-2 flex-col" data-cid="n3517">
                                  <div className="box-content max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:max-h-[2.4rem]" data-cid="n3518">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n3519">
                                      <a className="box-content inline-block cursor-pointer" data-cid="n3520" data-component="link" dir="auto" href="/browse/MPREb_eEBA2q39pWD">
                                        La Cherokee
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex relative mt-[0.1875rem] items-center 2xl:h-[2.4rem] 2xl:static 2xl:inset-auto" data-cid="n3521">
                                    {" "}
                                    <span className="box-content w-5 h-4 flex absolute top-0 min-w-0 items-center transform-[matrix(1,0,0,1,0,0.4)]" data-cid="n3522" id="inline-badges">
                                      <ytmusic-inline-badge-renderer class="box-content w-4 h-4 block mr-1 2xl:hidden" data-cid="n3523">
                                        <yt-icon class="box-content block relative justify-center items-center align-middle text-color-003 2xl:hidden" data-cid="n3524" aria-label="Explicit" title="Explicit">
                                          <span className="box-content flex justify-center items-center 2xl:hidden" data-cid="n3525">
                                            <div className="box-content block 2xl:hidden" data-cid="n3526">
                                              <Icon32 cid={"n3527"} />
                                            </div>
                                          </span>
                                        </yt-icon>
                                        {" "}
                                      </ytmusic-inline-badge-renderer>
                                    </span>
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal indent-5 line-clamp-2 2xl:h-[2.4rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] 2xl:indent-[inherit]" data-cid="n3528">
                                      <span className="box-content inline" data-cid="n3529">
                                        Single
                                      </span>
                                      <span className="box-content inline" data-cid="n3530">
                                        {" • "}
                                      </span>
                                      <a className="box-content inline cursor-pointer 2xl:inline-block" data-cid="n3531" data-component="link" href="/channel/UC47k7qXysCBKeaYfc1zmkIA">
                                        Natanael Cano
                                      </a>
                                      <span className="box-content inline" data-cid="n3532">
                                        {" & "}
                                      </span>
                                      <a className="box-content inline cursor-pointer 2xl:inline-block" data-cid="n3533" data-component="link" href="/channel/UCYMm2JZ_mvXYr7vT9-8_thw">
                                        Gabito Ballesteros
                                      </a>
                                      <span className="hidden 2xl:box-content 2xl:inline" data-cid="n3534">
                                        {" & "}
                                      </span>
                                      <a className="hidden 2xl:box-content 2xl:inline-block 2xl:cursor-pointer" data-cid="n3535" href="/channel/UCIz8Vvt9ux6x7Ryi2sqG1ww">
                                        Saja Boys
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n3536" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[16.6375rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[20.025rem]" data-cid="n3537" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px]" data-cid="n3538" data-component="link" href="/browse/MPREb_ff7Pz9MH1qm" title="Ayer y Hoy II: Si Tú Supieras, Esta Triste Soledad, Cuánto Estoy Sufriendo, Por Qué Me Enamoré de Ti">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px]" data-cid="n3539">
                                    <yt-img-shadow class="box-content flex items-center shrink-0" data-cid="n3540" id="image">
                                      <img className="box-content w-auto h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem]" data-cid="n3541" data-component="image" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px]" data-cid="n3542" id="ripple">
                                    {" "}
                                    <div className="box-content h-full block absolute top-0 inset-x-0 overflow-hidden pointer-events-none" data-cid="n3543" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem]" data-cid="n3544" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content flex mt-2 flex-col" data-cid="n3545">
                                  <div className="box-content h-[2.1rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n3546">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n3547">
                                      <a className="box-content inline-block cursor-pointer" data-cid="n3548" data-component="link" dir="auto" href="/browse/MPREb_ff7Pz9MH1qm">
                                        Ayer y Hoy II: Si Tú Supieras, Esta Triste Soledad, Cuánto Estoy Sufriendo, Por Qué Me Enamoré de Ti
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[1.05rem] flex mt-[0.1875rem] items-center 2xl:h-[1.2rem] 2xl:relative" data-cid="n3549">
                                    {" "}
                                    <span className="box-content w-0 h-0 flex items-center transform-[none] 2xl:w-5 2xl:h-4 2xl:absolute 2xl:top-0 2xl:min-w-0 2xl:transform-[matrix(1,0,0,1,0,1.6)]" data-cid="n3550" id="inline-badges">
                                      <ytmusic-inline-badge-renderer class="hidden 2xl:box-content 2xl:w-4 2xl:h-4 2xl:block 2xl:mr-1" data-cid="n3551">
                                        <yt-icon class="hidden 2xl:box-content 2xl:block 2xl:relative 2xl:justify-center 2xl:items-center 2xl:align-middle 2xl:text-color-003" data-cid="n3552" aria-label="Explicit" title="Explicit">
                                          <span className="hidden 2xl:box-content 2xl:flex 2xl:justify-center 2xl:items-center" data-cid="n3553">
                                            <div className="hidden 2xl:box-content 2xl:block" data-cid="n3554">
                                              <Icon20 cid={"n3555"} />
                                            </div>
                                          </span>
                                        </yt-icon>
                                        {" "}
                                      </ytmusic-inline-badge-renderer>
                                    </span>
                                    {" "}
                                    <yt-formatted-string class="box-content h-[1.05rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem] 2xl:indent-5" data-cid="n3556">
                                      <span className="box-content inline" data-cid="n3557">
                                        Single
                                      </span>
                                      <span className="box-content inline" data-cid="n3558">
                                        {" • "}
                                      </span>
                                      <a className="box-content inline-block cursor-pointer 2xl:inline" data-cid="n3559" data-component="link" href="/channel/UCZGdba48HEYyP3gn21wvC2w">
                                        Grupo Bryndis
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n3560" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                              <ytmusic-two-row-item-renderer class="box-content w-45 h-[16.6375rem] block align-top max-md:w-40 max-md:h-[15.3875rem] 2xl:w-[224.7px] 2xl:h-[20.025rem]" data-cid="n3561" role="listitem">
                                <a className="box-content block relative pt-45 overflow-hidden cursor-pointer max-md:pt-40 2xl:pt-[224.7px]" data-cid="n3562" href="/browse/MPREb_hgQavst0rDu" title="KPop Demon Hunters, la bande originale du film Netflix">
                                  {" "}
                                  <ytmusic-thumbnail-renderer class="box-content w-45 h-45 block absolute top-0 rounded-lg overflow-hidden 2xl:w-[224.7px] 2xl:h-[224.7px]" data-cid="n3563">
                                    <yt-img-shadow class="box-content flex items-center shrink-0" data-cid="n3564" id="image">
                                      <img className="box-content w-full h-45 block max-w-full overflow-clip object-cover max-md:h-40 2xl:h-[14.0625rem]" data-cid="n3565" alt="" id="img" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="226" />
                                    </yt-img-shadow>
                                    {" "}
                                  </ytmusic-thumbnail-renderer>
                                  {" "}
                                  <tp-yt-paper-ripple class="box-content w-45 h-45 block absolute top-0 left-0 overflow-hidden pointer-events-none 2xl:w-[224.7px] 2xl:h-[224.7px]" data-cid="n3566" id="ripple">
                                    {" "}
                                    <div className="box-content w-45 h-full block absolute top-0 overflow-hidden pointer-events-none 2xl:w-[224.7px]" data-cid="n3567" id="waves" />
                                    {" "}
                                  </tp-yt-paper-ripple>
                                  {" "}
                                  <div className="box-content w-[1.9125rem] h-[1.9125rem] block absolute bottom-2 left-2 2xl:w-[2.3875rem] 2xl:h-[2.3875rem]" data-cid="n3568" id="thumbnail-corner-overlay">
                                    {" "}
                                  </div>
                                  {" "}
                                </a>
                                {" "}
                                <div className="box-content h-[4.8875rem] flex mt-2 flex-col 2xl:h-[3.0875rem]" data-cid="n3569">
                                  <div className="box-content h-[2.1rem] max-h-[2.1rem] mt-2 overflow-hidden whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem]" data-cid="n3570">
                                    {" "}
                                    <yt-formatted-string class="box-content inline text-sm font-medium leading-[1.0625rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n3571">
                                      <a className="box-content inline-block cursor-pointer whitespace-nowrap" data-cid="n3572" dir="auto" href="/browse/MPREb_hgQavst0rDu">
                                        KPop Demon Hunters, la bande originale du film Netflix
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </div>
                                  {" "}
                                  <span className="box-content h-[2.1rem] flex mt-[0.1875rem] items-center 2xl:h-[1.2rem]" data-cid="n3573">
                                    {" "}
                                    <yt-formatted-string class="box-content h-[2.1rem] max-h-[2.1rem] flex-1 overflow-hidden text-color-003 text-sm leading-[1.0625rem] whitespace-normal line-clamp-2 2xl:h-[1.2rem] 2xl:max-h-[2.4rem] 2xl:text-base 2xl:leading-[1.1875rem]" data-cid="n3574">
                                      <span className="box-content inline" data-cid="n3575">
                                        Album
                                      </span>
                                      <span className="box-content inline" data-cid="n3576">
                                        {" • "}
                                      </span>
                                      <a className="box-content inline-block cursor-pointer" data-cid="n3577" href="/channel/UCuCy0Nk0SoKPyioObCZwgSw">
                                        KPop Demon Hunters Cast
                                      </a>
                                      <span className="box-content inline 2xl:hidden" data-cid="n3578">
                                        {", "}
                                      </span>
                                      <a className="box-content inline-block cursor-pointer 2xl:hidden" data-cid="n3579" href="/channel/UCB-w1qXuClYVjJV49lVothw">
                                        HUNTR/X
                                      </a>
                                      <span className="box-content inline 2xl:hidden" data-cid="n3580">
                                        {" & "}
                                      </span>
                                      <a className="box-content inline-block cursor-pointer 2xl:hidden" data-cid="n3581" href="/channel/UCIz8Vvt9ux6x7Ryi2sqG1ww">
                                        Saja Boys
                                      </a>
                                    </yt-formatted-string>
                                    {" "}
                                  </span>
                                  {" "}
                                </div>
                                {" "}
                                <div className="box-content block" data-cid="n3582" id="footer-button" />
                                {" "}
                              </ytmusic-two-row-item-renderer>
                            </div>
                            {" "}
                          </ytmusic-carousel>
                          {" "}
                        </div>
                        {" "}
                      </ytmusic-carousel-shelf-renderer>
                    </div>
                    {" "}
                    <div className="box-content block" data-cid="n3583" id="continuations" />
                    {" "}
                  </ytmusic-section-list-renderer>
                  {" "}
                  <div className="box-content block" data-cid="n3584" id="contents" />
                  {" "}
                  <div className="box-content block" data-cid="n3585" id="footer" />
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </ytmusic-browse-response>
            {" "}
          </div>
          {" "}
        </ytmusic-app-layout>
        {" "}
        <ytmusic-popup-container class="box-content block" data-cid="n3586" />
        {" "}
      </ytmusic-app>
      <Icon35 cid={"n3587"} />
    </>
  );
}
