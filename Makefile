.POSIX:
SHELL := /bin/bash
PNPM :=  $(shell which pnpm)
APP_NAME := Package Viewer
# Build the application
.PHONY: build
build: install
	@echo -e "\033[32mBuilding the application...\033[0m"
	$(PNPM) run build
	@echo -e "\033[32mBuild finished.\033[0m"
# Local development
.PHONY: dev
dev: install
	$(PNPM) run dev
# Format the code
.PHONY: fmt
fmt:
	@echo -e "\033[32mFormatting the code...\033[0m"
	$(PNPM) run fmt
	@echo -e "\033[32mFormatting finished.\033[0m"
# Install dependencies
.PHONY: install
install:
	@echo -e "\033[32mInstalling dependencies...\033[0m"
	$(PNPM) install
	@echo -e "\033[32mDependencies installed.\033[0m"
# Start the application
.PHONY: serve
serve:
	@echo -e "\033[32mStarting the application...\033[0m"
	$(PNPM) run serve
	@echo -e "\033[32mApplication started.\033[0m"
# Stop the application
.PHONY: stop
stop:
	@echo -e "\033[32mStopping the application...\033[0m"
	$(PNPM) run stop
	@echo -e "\033[32mApplication stopped.\033[0m"
