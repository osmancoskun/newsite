import { writable } from "svelte/store";
export let current_page = writable("home");
export let current_theme = writable("light")
