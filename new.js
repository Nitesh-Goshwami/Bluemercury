// Storing items/ products in an array

const items = [
  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "KJAER WEIS",
    title: "Matte, Naturally Liquid Lipstick",
    price: "30",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-enthralling-819869029325-1_235x.jpg?v=1621349985",
  },

  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "SKINCEUTICALS",
    title: "Daily Brightening UV Defense SPF 30",
    price: "50",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3606000578579-1_235x.jpg?v=1623217977",
  },

  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "M-61",
    title: "Hydraboost Gradual Tan Serum",
    price: "39",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237011552-1_235x.jpg?v=1626296817",
  },
  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "PHYTO",
    title: "PHYTONOVATHRIX Lotion",
    price: "46",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3338221003546-1_235x.jpg?v=1620672324",
  },
  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "ORIBE",
    title: "Très Set Structure Spray",
    price: "54",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840035204628-1_235x.jpg?v=1625845843",
  },
  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "ELLIS BROOKLYN",
    title: "MYTH Spectacular Scented Body Oil",
    price: "60",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-852116006199-1_235x.jpg?v=1624610217",
  },
  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "SIO BEAUTY",
    title: "SiO Energy Serum",
    price: "30",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-856580006709-1_235x.jpg?v=1624292184",
  },
  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "SURRATT",
    title: "Artistique Liquid Blush",
    price: "29",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-cantaloup-037182655605-1_235x.jpg?v=1626338267",
  },
  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "RAHUA",
    title: "Legendary Amazon Oil™",
    price: "42",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-859528006496-1_235x.jpg?v=1624292180",
  },
  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "KJAER WEIS",
    title: "Matte, Naturally Liquid Lipstick",
    price: "51",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-enthralling-819869029325-1_235x.jpg?v=1621349985",
  },

  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "SKINCEUTICALS",
    title: "Daily Brightening UV Defense SPF 30",
    price: "10",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3606000578579-1_235x.jpg?v=1623217977",
  },

  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "M-61",
    title: "Hydraboost Gradual Tan Serum",
    price: "19",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-817237011552-1_235x.jpg?v=1626296817",
  },
  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "PHYTO",
    title: "PHYTONOVATHRIX Lotion",
    price: "66",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3338221003546-1_235x.jpg?v=1620672324",
  },
  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "ORIBE",
    title: "Très Set Structure Spray",
    price: "44",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840035204628-1_235x.jpg?v=1625845843",
  },
  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "ELLIS BROOKLYN",
    title: "MYTH Spectacular Scented Body Oil",
    price: "37",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-852116006199-1_235x.jpg?v=1624610217",
  },
  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "SIO BEAUTY",
    title: "SiO Energy Serum",
    price: "80",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-856580006709-1_235x.jpg?v=1624292184",
  },
  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "SURRATT",
    title: "Artistique Liquid Blush",
    price: "54",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-cantaloup-037182655605-1_235x.jpg?v=1626338267",
  },
  {
    wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
    name: "RAHUA",
    title: "Legendary Amazon Oil™",
    price: "22",
    img: "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-859528006496-1_235x.jpg?v=1624292180",
  },
];

if (localStorage.getItem("items") == null) {
  localStorage.setItem("items", JSON.stringify(items));
}

// Showing product Grids
function showItems(l) {
  let items = l;
  let items_div = document.getElementById("items");

  items_div.innerHTML = null;

  items.forEach(function (el) {
    let div = document.createElement("div");
    let p_name = document.createElement("p");
    p_name.innerText = el.name;

    let span_title = document.createElement("span");
    span_title.innerText = el.title;

    let p_price = document.createElement("p");
    p_price.innerHTML = `$${el.price}`;

    let img = document.createElement("img");
    img.src = el.img;

    let wish = document.createElement("img");
    wish.src = el.wish;
    wish.style.width = "22px";
    wish.style.height = "21px";
    wish.style.float = "left";
    wish.style.marginBottom = "0px";

    p_name.setAttribute(
      "style",
      " font-family: Montserrat Medium,sans-serif; font-weight: 400;letter-spacing: .2px;line-height: 24px;text-transform: uppercase;color: #12284c;font-size: 14px;"
    );
    span_title.setAttribute(
      "style",
      " font-family: Montserrat Light,sans-serif; font-weight: 300;letter-spacing: .18px;line-height: 20px;color: #12284c;font-size: 14px;"
    );
    p_price.setAttribute(
      "style",
      " font-family: Montserrat Light,sans-serif; font-weight: 400;line-height: 1.65;color: #12284c;font-size: 14px;"
    );

    img.addEventListener("click", function () {
      window.location.href = "product.html";
    });
    
    var i = 0;
    function swtichArrayColor() {
      var arr = ["#5e769b", "white"];
      if (i % 2 == 0) {
        wish.style.backgroundColor = arr[0];
      } else {
        wish.style.backgroundColor = arr[1];
      }
      i++;
    }
    wish.addEventListener("click", swtichArrayColor);

    div.append(wish, img, p_name, span_title, p_price);
    items_div.append(div);
  });
}
showItems(JSON.parse(localStorage.getItem("items")));

// NavBar Slide start

function slideshowOffer() {
  let slide_text = document.getElementById("slide-text");
  let p = document.createElement("p");

  let announcement_msg = [
    "Earn up to $100! Receive $20 for every $100 you spend.",
    "Free shipping for bluerewards members >",
    "Free samples with all orders >",
    "Free gifts with purchase. Browse now >",
  ];

  p.innerHTML = announcement_msg[0];
  p.style.textAlign = "center";
  p.style.textTransform = "uppercase";
  slide_text.append(p);
  let i = 1;
  setInterval(function () {
    p.innerHTML = announcement_msg[i % announcement_msg.length];
    p.style.textAlign = "center";
    p.style.textTransform = "uppercase";
    i++;
    slide_text.append(p);
  }, 5000);
}
slideshowOffer();
// NavBar Slide End

// Feature and sorting seletive function

function myFunction() {
  var x = document.getElementById("mySelect").value;
  if (x == "Price, Low to High") {
    sortLH();
  } else if (x == "Price, High to Low") {
    sortHL();
  }
}
//  filtering 

// let item_name = document.getElementById("PHYTO").value;
// console.log(item_name)
// console.log("goswami")
// if(item_name == "PHYTO") {
//   filter()
// }
// function filter() {
//   let items = JSON.parse(localStorage.getItem("items"));
//   console.log("name")
//   items = items.sort(function (a, b) {
//     return a.price - b.price;
//   });
//   showItems(items);

// }







// Sprting Functions for Low to high and High to low
function sortLH() {
  let items = JSON.parse(localStorage.getItem("items"));

  items = items.sort(function (a, b) {
    return a.price - b.price;
  });
  showItems(items);
}

function sortHL() {
  let items = JSON.parse(localStorage.getItem("items"));

  items = items.sort(function (a, b) {
    return b.price - a.price;
  });
  showItems(items);
}

let dropDown_type = document.getElementById("dropdown_type");

dropDown_type.addEventListener("click", function () {
  document.getElementById("myDropdown_type").classList.toggle("show");
});

let dropDown_brand = document.getElementById("dropdown_brand");

dropDown_brand.addEventListener("click", function () {
  document.getElementById("myDropdown_brand").classList.toggle("show");
});

let dropdown_shopby = document.getElementById("dropdown_shopby");

dropdown_shopby.addEventListener("click", function () {
  document.getElementById("myDropdown_shopby").classList.toggle("show");
});

let dropdown_price = document.getElementById("dropdown_price");

dropdown_price.addEventListener("click", function () {
  document.getElementById("myDropdown_price").classList.toggle("show");
});


