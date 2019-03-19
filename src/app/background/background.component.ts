import { async } from '@angular/core/testing';
import { DownloadService } from './../download.service';
import { Component, OnInit } from "@angular/core";

@Component({
    template: '<h1>Background Page</h1>'
})

export class BackgroundComponent implements OnInit{
    constructor(private downloadService: DownloadService){}

    ngOnInit(){
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
           
              if (request.type == "twitter-internal"){
                this.downloadTwitterVideos(request.id)
              }

              if (request.type == "twitter-external"){
                  this.downloadExternalVideos(request.url)
              }

        });
    }

    findVideoURL(page) {
        var parsed = page.replace(/&quot;/g, '"').replace(/\\/g, '').split('"');
        for (var i in parsed) {
            if ((parsed[i].search("video.twimg.com") > 0) && (parsed[i].search("mp4") > 0)) {
                return parsed[i];
            }
        }
        return "";
    }

    downloadTwitterVideos(id: string){
        return this.downloadService.getVideoDetails(id)
        .subscribe(
            (data) => {
                var targetVideoURL = this.findVideoURL(data);
                this.downLoadMp4Video(targetVideoURL)
            },
            (error) => {
                chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, {error: true}, function(response) {
                    //   console.log(response.farewell);
                    });
                  });
            }
          );
    }

    // async downloadTwitterVideos(id: string){
    //    const url = await this.getUrlDetails(id)
    //    this.downLoadMp4Video(url)
    // }

    async downloadExternalVideos(url: string){
        this.downLoadMp4Video(url)
    }

    downLoadMp4Video(url: string){
        chrome.downloads.download({
            url: url
        });
    }
}