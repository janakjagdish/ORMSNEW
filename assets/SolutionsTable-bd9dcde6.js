import { r as t, j as e, a as P, u as v } from "./index-10d40892.js";
import { F as _ } from "./FileSaver.min-c0a8d237.js";
const N = t.createContext({
  ProductVersionsPackages: [],
  editSelectedSolution: null,
  editProductVersionsPackages: null,
  SelectedSolution: null,
  viewDialog: null,
  editViewDialog: null,
});
function H({ children: s }) {
  const [r, i] = t.useState([]),
    [a, l] = t.useState(""),
    [n, o] = t.useState(!1);
  return (
    t.useEffect(
      () => () => {
        i([]), l("");
      },
      []
    ),
    e.jsx(N.Provider, {
      value: {
        editProductVersionsPackages: i,
        ProductVersionsPackages: r,
        viewDialog: n,
        SelectedSolution: a,
        editViewDialog: o,
        editSelectedSolution: l,
      },
      children: s,
    })
  );
}
function J({
  productName: s,
  Vendor: r,
  version: i,
  Status: a,
  Release_Date: l,
  LastUpdate: n,
  view: o,
}) {
  return e.jsxs("tr", {
    className: `childProduct ${o ? "" : "hidden"}`,
    children: [
      e.jsx("td", { children: s }),
      e.jsx("td", { children: r }),
      e.jsx("td", { children: i }),
      e.jsx("td", { children: a }),
      e.jsx("td", { children: l }),
      e.jsx("td", { children: n }),
    ],
  });
}
function M({
  version: s,
  lastUpdate: r,
  numOfItems: i,
  release_date: a,
  Release_Customer: l,
  status: n,
  productVersions: o,
  dqaReport: j,
}) {
  const [d, S] = t.useState([]),
    [m, k] = t.useState(!1),
    [b, y] = t.useState(!1),
    { name: p } = P(),
    { solutions: g, Packages: T } = v(),
    {
      SelectedSolution: R,
      editProductVersionsPackages: D,
      editViewDialog: U,
      editSelectedSolution: A,
    } = t.useContext(N),
    E = t.useCallback(() => y((c) => !c), []);
  t.useEffect(() => {
    for (const c in o) {
      if (!o.hasOwnProperty(c)) continue;
      o[c].map((h) => {
        const {
          version: u,
          Vendor: x,
          Status: w,
          Release_Date: C,
          LastUpdate: F,
        } = h;
        S((V) => [
          ...V,
          {
            productName: c,
            parentName: s,
            version: u,
            Vendor: x,
            Status: w,
            Release_Date: C,
            LastUpdate: F,
          },
        ]);
      });
    }
    return () => {
      S([]), k(!1);
    };
  }, [o]);
  const O = t.useCallback(() => {
      A(s), U(!0);
    }, [s]),
    B = t.useCallback(
      ({ target: { checked: c, value: f } }) => {
        if ((k((h) => !h), !c)) {
          D((h) => {
            [...h.filter((u) => u.parentName !== f)];
          });
          return;
        }
        d == null ||
          d.map((h, u) => {
            const x =
                T == null
                  ? void 0
                  : T.filter(({ parentProduct: C }) => C === h.productName),
              w =
                x == null
                  ? void 0
                  : x.map(({ productVersionName: C }) => C === h.version);
            w == null ||
              w.map(
                ({
                  med5sumFileName: C,
                  med5sum: F,
                  downloadFileName: V,
                  download: z,
                }) =>
                  D((G) => [...G, { Link: z, Name: V }, { Link: F, Name: C }])
              );
          });
      },
      [d, T]
    ),
    I = t.useCallback(
      async ({
        target: {
          value: c,
          dataset: { version: f },
        },
      }) => {
        if (c === n) return;
        const h = g == null ? void 0 : g.filter((w) => f === w.version)[0],
          u = new Date()
            .toLocaleDateString("en-GB")
            .split("/")
            .reverse()
            .join("-"),
          x = await (
            await fetch(
              "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/version",
              {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  TableName: p,
                  Item: { ...h, lastUpdate: u, status: c },
                }),
              }
            )
          ).json();
        if ((x == null ? void 0 : x.success) === "failed") {
          alert("failed to send the data");
          return;
        }
        alert("data was sent successfully"), location.reload();
      },
      [g]
    ),
    L = t.useCallback(
      ({
        target: {
          dataset: { name: c },
          value: f,
          checked: h,
        },
      }) => {
        if (!h) {
          D((u) =>
            u == null
              ? void 0
              : u.filter((x) => {
                  if (x.Link !== f && x.Name !== c) return !0;
                })
          );
          return;
        }
        D((u) => [...u, { Link: f, Name: c }]);
      },
      []
    );
  return e.jsxs(t.Fragment, {
    children: [
      e.jsxs("tr", {
        onClick: E,
        children: [
          e.jsx("td", { children: s }),
          e.jsx("td", { children: r }),
          e.jsx("td", {
            children: e.jsx("select", {
              onChange: I,
              "data-version": s,
              children: e.jsxs("optgroup", {
                label: "select Status",
                children: [
                  e.jsx("option", { children: n }),
                  e.jsx("option", {
                    children:
                      n !== "Released"
                        ? "Released"
                        : "All product not stored or released",
                  }),
                ],
              }),
            }),
          }),
          e.jsx("td", { children: a }),
          e.jsx("td", { children: i }),
          e.jsx("td", { children: l }),
          e.jsx("td", {
            children: e.jsx("input", {
              type: "checkbox",
              onChange: B,
              value: s,
              checked: m,
            }),
          }),
          e.jsx("td", {
            children:
              !!d.length &&
              e.jsx("input", {
                type: "checkbox",
                checked: R === s,
                value: "Update Release Customer",
                onChange: O,
              }),
          }),
          e.jsx("td", {
            children:
              j &&
              e.jsx("input", {
                type: "checkbox",
                value: j.Link,
                "data-name": j.Name,
                onChange: L,
              }),
          }),
        ],
      }),
      !!d.length &&
        e.jsxs(t.Fragment, {
          children: [
            e.jsxs("tr", {
              className: `childHeader ${b ? "" : "hidden"}`,
              children: [
                e.jsx("th", { children: "Product Name" }),
                e.jsx("th", { children: "Vendor" }),
                e.jsx("th", { children: "Version" }),
                e.jsx("th", { children: "Status" }),
                e.jsx("th", { children: "Release Date" }),
                e.jsx("th", { children: "Last Update" }),
              ],
            }),
            d.map((c, f) => t.createElement(J, { ...c, view: b, key: f })),
          ],
        }),
    ],
  });
}
function $() {
  const { ProductVersionsPackages: s } = t.useContext(N),
    r = t.useCallback((a, l) => new Promise((n, o) => n(_.saveAs(a, l))), []),
    i = t.useCallback(() => {
      if (!s.length) {
        alert("no solution versions were selected");
        return;
      }
      s == null ||
        s.map(async ({ Link: a, Name: l }) => {
          try {
            const n = await (
              await fetch(a == null ? void 0 : a.replace("httpss", "https"))
            ).blob();
            await r(n, l);
          } catch {
            alert("failed to fetch file");
          }
        });
    }, [s]);
  return e.jsx("button", {
    className: "downloadBtn",
    type: "button",
    onClick: i,
    children: "Download",
  });
}
function q() {
  const [s, r] = t.useState([]),
    { solutions: i } = v(),
    { name: a } = P(),
    l = t.useRef(),
    {
      viewDialog: n,
      editViewDialog: o,
      SelectedSolution: j,
      editSelectedSolution: d,
    } = t.useContext(N);
  t.useEffect(() => {
    if (!n) {
      l.current.close();
      return;
    }
    l.current.showModal();
  }, [n]);
  const S = t.useCallback(() => {
      o(!1), d("");
    }, []),
    m = t.useCallback(({ target: { checked: b, value: y } }) => {
      if (!b) {
        r((p) => p.filter((g) => g !== y));
        return;
      }
      r((p) => [...p, y]);
    }, []),
    k = t.useCallback(async () => {
      if ((d(""), !s.length)) {
        alert("please choose customers");
        return;
      }
      o(!1);
      const b = i == null ? void 0 : i.filter(({ version: g }) => g === j)[0];
      if (b.Release_Customer === s.join(", ")) {
        alert("nothing has changed");
        return;
      }
      const y = new Date()
          .toLocaleDateString("en-GB")
          .split("/")
          .reverse()
          .join("-"),
        p = await (
          await fetch(
            "https://ch5zkb6gti.execute-api.eu-west-2.amazonaws.com/staging/api/version",
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                TableName: a,
                Item: { ...b, Release_Customer: s.join(", "), lastUpdate: y },
              }),
            }
          )
        ).json();
      if ((p == null ? void 0 : p.success) === "failed") {
        alert("failed to send the data");
        return;
      }
      alert("data was sent successfully"), location.reload();
    }, [s.length, i, j]);
  return e.jsx("dialog", {
    ref: l,
    className: "dialog",
    children: e.jsxs("form", {
      method: "dialog",
      onSubmit: k,
      children: [
        e.jsxs("ul", {
          children: [
            e.jsxs("li", {
              children: [
                e.jsx("input", {
                  type: "checkbox",
                  value: "TF-Germany",
                  id: "TF-Germany",
                  onClick: m,
                }),
                e.jsx("label", {
                  htmlFor: "TF-Germany",
                  children: "TF-Germany",
                }),
              ],
            }),
            e.jsxs("li", {
              children: [
                e.jsx("input", {
                  type: "checkbox",
                  value: "TF-Spain",
                  id: "TF-Spain",
                  onClick: m,
                }),
                e.jsx("label", { htmlFor: "TF-Spain", children: "TF-Spain" }),
              ],
            }),
            e.jsxs("li", {
              children: [
                e.jsx("input", {
                  type: "checkbox",
                  value: "TF-Brazil",
                  id: "TF-Brazil",
                  onClick: m,
                }),
                e.jsx("label", { htmlFor: "TF-Brazil", children: "TF-Brazil" }),
              ],
            }),
            e.jsxs("li", {
              children: [
                e.jsx("input", {
                  type: "checkbox",
                  value: "Thai AIS",
                  id: "Thai AIS",
                  onClick: m,
                }),
                e.jsx("label", { htmlFor: "Thai AIS", children: "Thai AIS" }),
              ],
            }),
          ],
        }),
        e.jsx("button", { onClick: S, type: "button", children: "cancel" }),
        e.jsx("button", { type: "submit", children: "confirm" }),
      ],
    }),
  });
}
function W() {
  const { solutions: s, productVersions: r } = v(),
    { name: i } = P();
  return e.jsxs(H, {
    children: [
      e.jsxs("h1", {
        className: "TableHeading",
        children: ["Solution Versions of ", i],
      }),
      e.jsxs("table", {
        className: "dataTable",
        children: [
          e.jsx("thead", {
            children: e.jsxs("tr", {
              children: [
                e.jsx("th", { children: "Version" }),
                e.jsx("th", { children: "Last Update" }),
                e.jsx("th", { children: "Status" }),
                e.jsx("th", { children: "Release Date" }),
                e.jsx("th", { children: "Number Of Items" }),
                e.jsx("th", { children: "Release Customer" }),
                e.jsx("th", { children: "Download Solution Version" }),
                e.jsx("th", {
                  children:
                    "Change List of Customers using this product version",
                }),
                e.jsx("th", { children: "Dqa Report" }),
              ],
            }),
          }),
          e.jsx("tbody", {
            children:
              s &&
              s.map((a, l) => {
                var j;
                const n = {},
                  o = (j = a.products) == null ? void 0 : j.split(", ");
                return (
                  o == null ||
                    o.forEach((d) => {
                      for (const S in r) {
                        if (!r.hasOwnProperty(S)) continue;
                        const m = r[S].filter((k) => k.version === d);
                        m.length && (n[S] = m);
                      }
                    }),
                  e.jsx(M, { ...a, productVersions: n }, l)
                );
              }),
          }),
        ],
      }),
      e.jsx(q, {}),
      e.jsx($, {}),
    ],
  });
}
export { W as default };
