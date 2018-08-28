import RouterInterface from "varie/lib/routing/RouterInterface";

import ErrorViews from "@views/errors";

import Docs from "@views/Docs.vue";
import DocumentationArea from "@views/areas/Documentation.vue";

export default function($router: RouterInterface) {
  /*
  |--------------------------------------------------------------------------
  | Your default routes for your application
  |--------------------------------------------------------------------------
  |
  */

  let docsHomePage = "/docs/latest/what-is-varie";
  $router.redirect("/", docsHomePage);
  $router.redirect("/docs", docsHomePage);
  $router.redirect("/docs/latest", docsHomePage);
  $router
    .prefix("/docs")
    .area(DocumentationArea)
    .group(() => {
      $router.route(":version?/:page?", Docs).setName("docs");
    });

  $router.route("*", ErrorViews.Error404);
}
