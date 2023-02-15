import { r as n, j as e, u as L, a as y } from "./index-10d40892.js";
import { F as E } from "./FileSaver.min-c0a8d237.js";
const w = n.createContext({ DownloadLinksArr: [], editContext: null });
function F({ children: s }) {
  const [c, o] = n.useState([]);
  return (
    n.useEffect(() => () => o([]), []),
    e.jsx(w.Provider, {
      value: { DownloadLinksArr: c, editContext: o },
      children: s,
    })
  );
}
function R({
  packageName: s,
  med5sumFileName: c,
  downloadFileName: o,
  download: l,
  med5sum: r,
  handleClick: a,
  view: t,
}) {
  return e.jsxs("tr", {
    className: t ? "" : "hidden",
    children: [
      e.jsx("td", { children: s }),
      e.jsx("td", {
        children:
          l &&
          e.jsx("input", {
            type: "checkbox",
            value: l,
            "data-name": o,
            onClick: a,
          }),
      }),
      e.jsx("td", {
        children:
          r &&
          e.jsx("input", {
            type: "checkbox",
            value: r,
            "data-name": c,
            onClick: a,
          }),
      }),
    ],
  });
}
function B({
  version: s,
  LastUpdate: c,
  Status: o,
  Release_Date: l,
  numOfItems: r,
  ReleaseNote: a,
  ProductPackages: t,
}) {
  const [p, D] = n.useState(!1),
    [N, b] = n.useState(!1),
    v = n.useCallback(() => D((i) => !i), [p]),
    { Products: u } = L(),
    { name: k } = y(),
    { editContext: m } = n.useContext(w);
  n.useRef(),
    n.useEffect(
      () => () => {
        m([]), b(!1);
      },
      [s]
    );
  const C = n.useCallback(
      ({
        target: {
          value: i,
          checked: d,
          dataset: { name: h },
        },
      }) => {
        if (!d) {
          m((x) => x.filter((j) => j.Link !== i));
          return;
        }
        m((x) => [...x, { Link: i, Name: h }]);
      },
      [t == null ? void 0 : t.length]
    ),
    S = n.useCallback(
      async ({
        target: {
          value: i,
          dataset: { version: d },
        },
      }) => {
        if (i === o) return;
        const h = u == null ? void 0 : u.filter((f) => f.version === d)[0],
          x = new Date()
            .toLocaleDateString("en-GB")
            .split("/")
            .reverse()
            .join("-"),
          j = await (
            await fetch(
              "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/version",
              {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  TableName: k,
                  Item: { ...h, LastUpdate: x, Status: i },
                }),
              }
            )
          ).json();
        if ((j == null ? void 0 : j.success) === "failed") {
          alert("failed to send the data");
          return;
        }
        alert("data was sent successfully");
      },
      [u]
    ),
    A = n.useCallback(
      ({ target: { checked: i } }) => {
        if ((console.log("running"), b((d) => !d), !i)) {
          m((d) => d.filter(({ productVersionName: h }) => h !== s));
          return;
        }
        t == null ||
          t.map(
            ({
              download: d,
              downloadFileName: h,
              med5sum: x,
              med5sumFileName: j,
              productVersionName: f,
            }) =>
              m((T) => [
                ...T,
                { Link: d, Name: h, productVersionName: f },
                { Link: x, Name: j, productVersionName: f },
              ])
          );
      },
      [t == null ? void 0 : t.length]
    );
  return e.jsxs(n.Fragment, {
    children: [
      e.jsxs("tr", {
        className: "Row",
        onClick: v,
        children: [
          e.jsx("td", { children: s }),
          e.jsx("td", { children: c }),
          e.jsx("td", {
            children: e.jsx("select", {
              onChange: S,
              "data-version": s,
              children: e.jsxs("optgroup", {
                label: "select Status",
                children: [
                  e.jsx("option", { children: o }),
                  e.jsx("option", {
                    children:
                      o !== "Released"
                        ? "Released"
                        : "All product not stored or released",
                  }),
                ],
              }),
            }),
          }),
          e.jsx("td", { children: l }),
          e.jsx("td", { children: r }),
          e.jsx("td", {
            children:
              Boolean(t == null ? void 0 : t.length) &&
              e.jsx("input", { type: "checkbox", onChange: A, checked: N }),
          }),
          e.jsx("td", {
            children:
              a &&
              e.jsx(e.Fragment, {
                children: e.jsx("input", {
                  type: "checkbox",
                  value: a.Link,
                  "data-name": a.Name,
                  onClick: C,
                }),
              }),
          }),
        ],
      }),
      Boolean(t == null ? void 0 : t.length) &&
        e.jsxs(n.Fragment, {
          children: [
            e.jsxs("tr", {
              className: `childHeader ${p ? "" : "hidden"}`,
              children: [
                e.jsx("th", { children: "Package name" }),
                e.jsx("th", { children: "download" }),
                e.jsx("th", { children: "med5sum" }),
              ],
            }),
            t.map((i, d) =>
              n.createElement(R, { ...i, key: d, view: p, handleClick: C })
            ),
          ],
        }),
    ],
  });
}
function U() {
  const { DownloadLinksArr: s } = n.useContext(w),
    c = n.useCallback(() => {
      if (!s.length) {
        alert(
          "no files were selected or there are no files associated to your products and please go upload some files"
        );
        return;
      }
      [...new Set(s.map(({ Link: l }) => l))]
        .map((l) => ({ ...s.filter((a) => a.Link === l)[0], Link: l }))
        .map(async ({ Name: l, Link: r }) => {
          try {
            const a = await (
              await fetch(r == null ? void 0 : r.replace("httpss", "https"))
            ).blob();
            await new Promise((t, p) => t(E.saveAs(a, l)));
          } catch (a) {
            console.log(a), alert("failed to fetch file");
          }
        });
    }, [s.length]);
  return e.jsx("button", {
    type: "button",
    className: "downloadBtn",
    onClick: c,
    children: "Download",
  });
}
function H() {
  const { Packages: s, Products: c } = L(),
    { name: o } = y();
  return e.jsxs(F, {
    children: [
      e.jsxs("h1", {
        className: "TableHeading",
        children: ["Product Versions of ", o],
      }),
      e.jsxs("table", {
        className: "dataTable",
        children: [
          e.jsx("thead", {
            children: e.jsxs("tr", {
              children: [
                e.jsx("th", { children: "version" }),
                e.jsx("th", { children: "Last Update" }),
                e.jsx("th", { children: "Status" }),
                e.jsx("th", { children: "Release Date" }),
                e.jsx("th", { children: "No of Items" }),
                e.jsx("th", { children: "Download Packages" }),
                e.jsx("th", { children: "Release Note" }),
              ],
            }),
          }),
          e.jsx("tbody", {
            children:
              c &&
              c.map((l, r) => {
                const a =
                  s == null
                    ? void 0
                    : s.filter((t) => t.productVersionName === l.version);
                return n.createElement(B, { ...l, key: r, ProductPackages: a });
              }),
          }),
        ],
      }),
      e.jsx(U, {}),
    ],
  });
}
export { H as default };
