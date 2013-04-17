Ext.data.JsonP.LintRoller({"mixedInto":[],"mixins":[],"code_type":"assignment","inheritable":false,"parentMixins":[],"meta":{"author":["Arthur Kay (http://www.akawebdesign.com)"]},"uses":[],"aliases":{},"superclasses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/LintRoller.html#LintRoller' target='_blank'>LintRoller.js</a></div></pre><div class='doc-contents'><p>@version 2.2.5</p>\n\n<p>GitHub Project: http://arthurakay.github.com/LintRoller/</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-exclusions' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LintRoller'>LintRoller</span><br/><a href='source/LintRoller.html#LintRoller-cfg-exclusions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/LintRoller-cfg-exclusions' class='name expandable'>exclusions</a><span> : Array</span></div><div class='description'><div class='short'>REQUIRED. ...</div><div class='long'><p>REQUIRED. An array of relative filepaths to the folders containing JS files that should NOT be linted</p>\n</div></div></div><div id='cfg-filepaths' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LintRoller'>LintRoller</span><br/><a href='source/LintRoller.html#LintRoller-cfg-filepaths' target='_blank' class='view-source'>view source</a></div><a href='#!/api/LintRoller-cfg-filepaths' class='name expandable'>filepaths</a><span> : Array</span></div><div class='description'><div class='short'>REQUIRED. ...</div><div class='long'><p>REQUIRED. An array of relative filepaths to the folders containing JS files</p>\n</div></div></div><div id='cfg-linters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LintRoller'>LintRoller</span><br/><a href='source/LintRoller.html#LintRoller-cfg-linters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/LintRoller-cfg-linters' class='name expandable'>linters</a><span> : Array</span></div><div class='description'><div class='short'>An array of lint module config objects. ...</div><div class='long'><p>An array of lint module config objects. See the classes under <a href=\"#!/api/LintRoller-cfg-linters\" rel=\"LintRoller-cfg-linters\" class=\"docClass\">LintRoller.linters</a> for more information.</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='cfg-logFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LintRoller'>LintRoller</span><br/><a href='source/LintRoller.html#LintRoller-cfg-logFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/LintRoller-cfg-logFile' class='name expandable'>logFile</a><span> : Object</span></div><div class='description'><div class='short'>An object containing:\n\n\n\"name\": the relative filepath to where error messages will be logged\n\"type\": the type of outp...</div><div class='long'><p>An object containing:</p>\n\n<ul>\n<li>\"name\": the relative filepath to where error messages will be logged</li>\n<li>\"type\": the type of output (\"text\", \"json\", or \"xml\")</li>\n</ul>\n\n<p>Defaults to: <code>{name: &quot;error_log.txt&quot;, type: &quot;text&quot;}</code></p></div></div></div><div id='cfg-stopOnFirstError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LintRoller'>LintRoller</span><br/><a href='source/LintRoller.html#LintRoller-cfg-stopOnFirstError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/LintRoller-cfg-stopOnFirstError' class='name expandable'>stopOnFirstError</a><span> : Boolean</span></div><div class='description'><div class='short'>True to stop linting your code when the first error is encountered. ...</div><div class='long'><p>True to stop linting your code when the first error is encountered.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-verbose' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LintRoller'>LintRoller</span><br/><a href='source/LintRoller.html#LintRoller-cfg-verbose' target='_blank' class='view-source'>view source</a></div><a href='#!/api/LintRoller-cfg-verbose' class='name expandable'>verbose</a><span> : Boolean</span></div><div class='description'><div class='short'>True to show verbose ouput in the terminal. ...</div><div class='long'><p>True to show verbose ouput in the terminal.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-files' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LintRoller'>LintRoller</span><br/><a href='source/LintRoller.html#LintRoller-property-files' target='_blank' class='view-source'>view source</a></div><a href='#!/api/LintRoller-property-files' class='name expandable'>files</a><span> : Array</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-announceErrors' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LintRoller'>LintRoller</span><br/><a href='source/LintRoller.html#LintRoller-method-announceErrors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/LintRoller-method-announceErrors' class='name expandable'>announceErrors</a>( <span class='pre'>Object errorList</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>errorList</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-announceSuccess' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LintRoller'>LintRoller</span><br/><a href='source/LintRoller.html#LintRoller-method-announceSuccess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/LintRoller-method-announceSuccess' class='name expandable'>announceSuccess</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getFiles' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LintRoller'>LintRoller</span><br/><a href='source/LintRoller.html#LintRoller-method-getFiles' target='_blank' class='view-source'>view source</a></div><a href='#!/api/LintRoller-method-getFiles' class='name expandable'>getFiles</a>( <span class='pre'>Object path</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LintRoller'>LintRoller</span><br/><a href='source/LintRoller.html#LintRoller-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/LintRoller-method-init' class='name expandable'>init</a>( <span class='pre'>Object config</span> )</div><div class='description'><div class='short'>Call this method to de-lint your JavaScript codebase. ...</div><div class='long'><p>Call this method to de-lint your JavaScript codebase.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initConfigs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LintRoller'>LintRoller</span><br/><a href='source/LintRoller.html#LintRoller-method-initConfigs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/LintRoller-method-initConfigs' class='name expandable'>initConfigs</a>( <span class='pre'>Object config</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-lintFiles' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LintRoller'>LintRoller</span><br/><a href='source/LintRoller.html#LintRoller-method-lintFiles' target='_blank' class='view-source'>view source</a></div><a href='#!/api/LintRoller-method-lintFiles' class='name expandable'>lintFiles</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-log' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LintRoller'>LintRoller</span><br/><a href='source/LintRoller.html#LintRoller-method-log' target='_blank' class='view-source'>view source</a></div><a href='#!/api/LintRoller-method-log' class='name expandable'>log</a>( <span class='pre'>Object msg, Object override</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>msg</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>override</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-logToFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LintRoller'>LintRoller</span><br/><a href='source/LintRoller.html#LintRoller-method-logToFile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/LintRoller-method-logToFile' class='name expandable'>logToFile</a>( <span class='pre'>Object errorList</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>errorList</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parseTree' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LintRoller'>LintRoller</span><br/><a href='source/LintRoller.html#LintRoller-method-parseTree' target='_blank' class='view-source'>view source</a></div><a href='#!/api/LintRoller-method-parseTree' class='name expandable'>parseTree</a>( <span class='pre'>Object pathConfig</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pathConfig</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setLinters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LintRoller'>LintRoller</span><br/><a href='source/LintRoller.html#LintRoller-method-setLinters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/LintRoller-method-setLinters' class='name expandable'>setLinters</a>( <span class='pre'>Object linters</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>linters</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"members":{"event":[],"property":[{"meta":{"private":true},"owner":"LintRoller","tagname":"property","name":"files","id":"property-files"}],"css_var":[],"method":[{"meta":{"private":true},"owner":"LintRoller","tagname":"method","name":"announceErrors","id":"method-announceErrors"},{"meta":{"private":true},"owner":"LintRoller","tagname":"method","name":"announceSuccess","id":"method-announceSuccess"},{"meta":{"private":true},"owner":"LintRoller","tagname":"method","name":"getFiles","id":"method-getFiles"},{"meta":{},"owner":"LintRoller","tagname":"method","name":"init","id":"method-init"},{"meta":{"private":true},"owner":"LintRoller","tagname":"method","name":"initConfigs","id":"method-initConfigs"},{"meta":{"private":true},"owner":"LintRoller","tagname":"method","name":"lintFiles","id":"method-lintFiles"},{"meta":{"private":true},"owner":"LintRoller","tagname":"method","name":"log","id":"method-log"},{"meta":{"private":true},"owner":"LintRoller","tagname":"method","name":"logToFile","id":"method-logToFile"},{"meta":{"private":true},"owner":"LintRoller","tagname":"method","name":"parseTree","id":"method-parseTree"},{"meta":{"private":true},"owner":"LintRoller","tagname":"method","name":"setLinters","id":"method-setLinters"}],"css_mixin":[],"cfg":[{"meta":{},"owner":"LintRoller","tagname":"cfg","name":"exclusions","id":"cfg-exclusions"},{"meta":{},"owner":"LintRoller","tagname":"cfg","name":"filepaths","id":"cfg-filepaths"},{"meta":{},"owner":"LintRoller","tagname":"cfg","name":"linters","id":"cfg-linters"},{"meta":{},"owner":"LintRoller","tagname":"cfg","name":"logFile","id":"cfg-logFile"},{"meta":{},"owner":"LintRoller","tagname":"cfg","name":"stopOnFirstError","id":"cfg-stopOnFirstError"},{"meta":{},"owner":"LintRoller","tagname":"cfg","name":"verbose","id":"cfg-verbose"}]},"html_meta":{"author":null},"tagname":"class","extends":null,"name":"LintRoller","alternateClassNames":[],"inheritdoc":null,"component":false,"singleton":true,"id":"class-LintRoller","statics":{"property":[],"event":[],"css_var":[],"method":[],"css_mixin":[],"cfg":[]},"requires":[],"files":[{"href":"LintRoller.html#LintRoller","filename":"LintRoller.js"}]});