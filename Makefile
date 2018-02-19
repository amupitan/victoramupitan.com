SASS = sass
SASSF = assets/sass
CSSF = assets/css
FLAGS= --sourcemap=none --style expanded
default: sass

sass: $(SASSF)/main.scss $(SASSF)/ie9.scss $(SASSF)/noscript.scss
	$(SASS) $(FLAGS) $(SASSF)/main.scss > $(CSSF)/main.css
	$(SASS) $(FLAGS) $(SASSF)/ie9.scss > $(CSSF)/ie9.css
	$(SASS) $(FLAGS) $(SASSF)/noscript.scss > $(CSSF)/noscript.css

