"use strict";

const default_urls = {
  url_fx: "https://Ryo-9399.github.io/mc_canvas/Outputs/CanvasMasao.js",
  url_kani2: "https://Ryo-9399.github.io/mc_canvas/Outputs/MasaoKani2.js",
  url_v28: "https://Ryo-9399.github.io/mc_canvas/Outputs/CanvasMasao_v28.js"
};

// save options to chrome.storage
function saveOptions() {
	const url_fx = document.getElementById("url_fx").value;
	const url_kani2 = document.getElementById("url_kani2").value;
	const url_v28 = document.getElementById("url_v28").value;
	chrome.storage.sync.set({url_fx, url_kani2, url_v28}, () => {
		// Update status to let user know options were saved.
		const status = document.getElementById('status');
		status.textContent = 'Options saved.';
		setTimeout(function () {
			status.textContent = '';
		}, 750);
	})
}

// restore options and fill input form
function restoreOptions() {
	chrome.storage.sync.get(default_urls, (items) => {
		document.getElementById("url_fx").value = items.url_fx;
		document.getElementById("url_kani2").value = items.url_kani2;
		document.getElementById("url_v28").value = items.url_v28;
	});
}

// reset all options to default and save them
function revertOptionsToDefault() {
	document.getElementById("url_fx").value = default_urls.url_fx;
	document.getElementById("url_kani2").value = default_urls.url_kani2;
	document.getElementById("url_v28").value = default_urls.url_v28;
	const status = document.getElementById('status');
	status.textContent = 'default options loaded (not yet be saved).';
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
document.getElementById('reset').addEventListener('click', revertOptionsToDefault);
