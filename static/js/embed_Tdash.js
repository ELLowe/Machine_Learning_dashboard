function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        // url = "https://public.tableau.com/views/FinalProjectVisualizations_15719671459750/SleepDisturbances?:embed=y&:display_count=yes&:origin=viz_share_link",
        url = "https://public.tableau.com/views/AnxietyinPreschoolStudents/Story1?:embed=y&:display_count=yes&:origin=viz_share_link"
        options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };

    var viz = new tableau.Viz(containerDiv, url, options);
    // Create a viz object and embed it in the container div.
}