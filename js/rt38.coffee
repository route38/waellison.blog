# You have to put CS functions in the global namespace to be callable from the
# page JS.  See http://stackoverflow.com/a/9254330 for particulars.
window.rt38_make_page_toc = () ->
  count =
    level1: -1
    level2: 0
    level3: 0
  previous = ""
  $("article div > h2, article div > h3, article div > h4").each((idx, elem) ->
    fmt = "bar"
    klass = ""

    switch $(this)[0].nodeName.toLowerCase()
      when "h2"
        count.level1++
        fmt = "#{count.level1}"
        klass = "level1"
        previous = "h2"
      when "h3"
        if previous isnt "h2"
          count.level2++
        else
          count.level2 = 0
        fmt = "#{count.level1}.#{count.level2}"
        klass = "level2"
        previous = "h3"
      when "h4"
        if previous is "h4"
          count.level3++
        else
          count.level3 = 0
        fmt = "#{count.level1}.#{count.level2}.#{count.level3}"
        klass = "level3"
        previous = "h4"

    anchor = $(this).
               text().
               replace(/[ ,.?!%()\[\]\{\}&-]/gi, "_").
               replace(/_{2,}/, "_")

    txt = this.innerHTML
    txt = "#{fmt}. #{txt}"
    this.innerHTML = txt

    $(this).attr("id", anchor)

    list = document.createElement("p")
    link = document.createElement("a")
    topLink = document.createElement("a")

    $(link).attr("href", "\##{anchor}")
    link.innerHTML = txt
    list.appendChild(link)
    $(list).addClass(klass)

    $(topLink).attr("href", "#top")
    $(topLink).attr("class", "toplink")
    $(topLink).attr("title", "Go to top of page")
    topLink.appendChild(document.createTextNode("➚"))
    this.appendChild(topLink)

    $(".toc").each(() ->
      $(this).append(list)))
