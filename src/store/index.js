import { writable } from "svelte/store";
export let current_page = writable("/");
export let current_theme = writable("light")
