using System;
using System.Web.Mvc;

namespace KnockoutBrownBag.Controllers
{
    public class JasmineController : Controller
    {
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
