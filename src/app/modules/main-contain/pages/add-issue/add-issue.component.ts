import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.scss']
})
export class AddIssueComponent implements OnInit {
  files: NgxFileDropEntry[] = [];
  viewFiles:any =[]
  issueModelView :any ={}
  issueModel :any ={}
  brands : any = []
  users : any = []
  bufferBrands:any = []
  bufferUsers:any=[]
  issues:any[]
  constructor(
    public datePipe: DatePipe,
    private toastrService: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.issues =  JSON.parse(localStorage.getItem('issues')) ?? []
    this.initialIssueModelView()
  }
  // ********* Initial Issue Model ********
  initialIssueModelView(){
    this.issueModelView = {
      issueType:false,
      departments:[
        {
          id:1,
          name:'Administrative',
          icon :'uil-dashboard',
          isSelected:false,
          brands:[
            {
              id:1,
              name:'Must',
              src:'./assets/images/brands/brand2.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar2.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar11.png'
                },
                {
                  id:3,
                  name:'Jon Grealish',
                  src: './assets/images/users/avatar.jpg'
                },
              ]
            },
            {
              id:2,
              name:'Deye',
              src:'./assets/images/brands/brand2.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar2.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar2.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar11.png'
                },
              ]
            },
            {
              id:3,
              name:'3D Battery',
              src:'./assets/images/brands/brand3.png'
              ,
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar11.png'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar2.jpg'
                },
              ]
            },
            {
              id:4,
              name:'LUminous',
              src:'./assets/images/brands/brand4.png'
              ,
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar11.png'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar10.png'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar9.png'
                },
              ]
            },
            {
              id:5,
              name:'Rocket',
              src:'./assets/images/brands/brand5.png'
              ,
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar11.png'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar2.jpg'
                },
              ]
            }, {
              id:6,
              name:'Rambo',
              src:'./assets/images/brands/brand6.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar2.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar11.png'
                },
              ]
            },
            {
              id:7,
              name:'Longi',
              src:'./assets/images/brands/brand7.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar11.png'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar11.png'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar1.jpg'
                },
              ]
            },
            {
              id:8,
              name:'Inkel',
              src:'./assets/images/brands/brand8.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar2.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar11.png'
                },
              ]
            },
          ]
        },
        {
          id:2,
          name:'Finance',
          icon :'uil-dollar-alt',
          isSelected:false,
          brands:[
            {
              id:9,
              name:'Must',
              src:'./assets/images/brands/brand2.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar2.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar11.png'
                },
              ]
            },
            {
              id:10,
              name:'Deye',
              src:'./assets/images/brands/brand2.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar11.png'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar11.png'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar1.jpg'
                },
              ]
            },
            {
              id:11,
              name:'3D Battery',
              src:'./assets/images/brands/brand3.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar2.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar11.png'
                },
              ]
            },
            {
              id:12,
              name:'LUminous',
              src:'./assets/images/brands/brand4.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar11.png'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar11.png'
                },
              ]
            }
          ]
        },
        {
          id:3,
          name:'Accounting',
          icon :'uil-user-check',
          isSelected:false,
          brands:[
            {
              id:13,
              name:'Rocket',
              src:'./assets/images/brands/brand5.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar2.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar11.png'
                },
              ]
            }, {
              id:14,
              name:'Rambo',
              src:'./assets/images/brands/brand6.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar11.png'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar1.jpg'
                },
              ]
            },
            {
              id:15,
              name:'Longi',
              src:'./assets/images/brands/brand7.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar2.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar11.png'
                },
              ]
            },
            {
              id:16,
              name:'Inkel',
              src:'./assets/images/brands/brand8.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/users/avatar2.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar11.png'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar1.jpg'
                },
              ]
            },
          ]
        },
        {
          id:4,
          name:'Sales',
          icon :'uil-percentage',
          isSelected:false,
          brands:[
            {
              id:17,
              name:'Must',
              src:'./assets/images/brands/brand2.png',
              users:[]
            },
            {
              id:18,
              name:'Deye',
              src:'./assets/images/brands/brand2.png',
              users:[]
            },
            {
              id:19,
              name:'3D Battery',
              src:'./assets/images/brands/brand3.png',
              users:[]
            },
            {
              id:20,
              name:'LUminous',
              src:'./assets/images/brands/brand4.png',
              users:[]
            },
          ]
        },
        {
          id:5,
          name:'Marketing',
          icon :'uil-shopping-bag',
          isSelected:false,
          brands:[
            {
              id:21,
              name:'Rocket',
              src:'./assets/images/brands/brand5.png',
              users:[]
            }, {
              id:22,
              name:'Rambo',
              src:'./assets/images/brands/brand6.png',
              users:[]
            },
            {
              id:23,
              name:'Longi',
              src:'./assets/images/brands/brand7.png',
              users:[]
            },
            {
              id:24,
              name:'Inkel',
              src:'./assets/images/brands/brand8.png',
              users:[]
            },
          ]
        },
        {
          id:6,
          name:'Logistic',
          icon :'uil-cog',
          isSelected:false,
          brands:[
            {
              id:25,
              name:'Rocket',
              src:'./assets/images/brands/brand5.png',
              users:[]
            }, {
              id:26,
              name:'Rambo',
              src:'./assets/images/brands/brand6.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar2.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar11.png'
                },
              ]
            },
            {
              id:27,
              name:'Longi',
              src:'./assets/images/brands/brand7.png',
              users:[]
            },
            {
              id:28,
              name:'Inkel',
              src:'./assets/images/brands/brand8.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar2.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar11.png'
                },
              ]
            },
          ]
        },
        {
          id:7,
          name:'HR',
          icon :'uil-users-alt',
          isSelected:false,
          brands:[
            {
              id:29,
              name:'Must',
              src:'./assets/images/brands/brand2.png',
              users:[]
            },
            {
              id:30,
              name:'Deye',
              src:'./assets/images/brands/brand2.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar2.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar11.png'
                },
              ]
            },
            {
              id:31,
              name:'3D Battery',
              src:'./assets/images/brands/brand3.png',
              users:[]
            },
            {
              id:32,
              name:'LUminous',
              src:'./assets/images/brands/brand4.png',
              users:[]
            },
           ]
        },
        {
          id:8,
          name:'Supplier',
          icon :'uil-life-ring',
          isSelected:false,
          brands:[
            {
              id:33,
              name:'Must',
              src:'./assets/images/brands/brand2.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar2.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar11.png'
                },
              ]
            },
            {
              id:34,
              name:'Deye',
              src:'./assets/images/brands/brand2.png',
              users:[]
            },
            {
              id:35,
              name:'3D Battery',
              src:'./assets/images/brands/brand3.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar2.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar11.png'
                },
              ]
            },
            {
              id:36,
              name:'LUminous',
              src:'./assets/images/brands/brand4.png',
              users:[]
            },
          ]
        },
        {
          id:9,
          name:'Security',
          icon :'uil-folder-lock',
          isSelected:false,
          brands:[
            {
              id:37,
              name:'Must',
              src:'./assets/images/brands/brand2.png',
              users:[]
            },
            {
              id:38,
              name:'Deye',
              src:'./assets/images/brands/brand2.png',
              users:[]
            },
            {
              id:39,
              name:'3D Battery',
              src:'./assets/images/brands/brand3.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar2.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar11.png'
                },
              ]
            },
            {
              id:40,
              name:'LUminous',
              src:'./assets/images/brands/brand4.png',
              users:[]
            },

            {
              id:41,
              name:'Rocket',
              src:'./assets/images/brands/brand5.png',
              users:[]
            }, {
              id:42,
              name:'Rambo',
              src:'./assets/images/brands/brand6.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar2.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar11.png'
                },
              ]
            },
            {
              id:43,
              name:'Longi',
              src:'./assets/images/brands/brand7.png',
              users:[
                {
                  id:1,
                  name:'Jack Grealish ',
                  src: './assets/images/users/avatar1.jpg'
                },
                {
                  id:2,
                  name:'Jan Wick',
                  src: './assets/images/users/avatar2.jpg'
                },
                {
                  id:3,
                  name:'Sara Grealish',
                  src: './assets/images/users/avatar11.png'
                },
              ]
            },
            {
              id:44,
              name:'Inkel',
              src:'./assets/images/brands/brand8.png',
              users:[]
            },
          ]
        }
    ],
    issueName: '',
    choiceOne: '',
    choiceTow: '',
    choiceThree: '',
    note: '',
    }
    this.issueModel.issueType =  this.issueModelView.issueType
  }
  // ********* Fun Choose Issue Type ********
  chooseIssueType(event){
    this.issueModel.issueType = event
  }
  // ********* Fun Choose Department ********
  chooseDepartment(department){
    this.brands = department.brands
    this.issueModel.department = department
    this.issueModel.department.isSelected = true
  }
  // ********* Fun Choose Brands*******
  chooseBrands(event,brand){
    let index = this.bufferBrands.findIndex(b => b.id == brand.id)
    index != -1 ? this.bufferBrands.splice(index,1) :  this.bufferBrands.push(brand)
    this.getUsers()
  }
  // ********* Fun Choose Users ********
  chooseUsers(event,user){
    let index = this.bufferUsers.findIndex(b => b.id == user.id)
    index != -1 ? this.bufferUsers.splice(index,1) :  this.bufferUsers.push(user)
  }
  // ********* Auxiliary functions  ********
    getUsers(){
      this.users = []
      for (let index = 0; index < this.bufferBrands.length; index++) {
        this.users = this.users.concat(this.bufferBrands[index].users)
      }
    }
    chooseDeadline(event: MatDatepickerInputEvent<Date>) {
      this.issueModel.deadline = this.datePipe.transform(event.value, 'medium')
    }
  // ********* Fun Remove File  ********
    removeFile(index){
      this.spinner.show();
      setTimeout(() => {
        this.viewFiles.splice(index,1)
        this.issueModel.attachments = this.viewFiles
          this.toastrService.success('', 'Delete File Successfully',
            {
              progressBar: true,
              titleClass : 'toast-title',
              progressAnimation: "increasing",
              timeOut: 2000
            });
            this.spinner.hide();
        }, 1000);
    }
  // ********* Fun reset From Issue  ********
  restIssueForm(form:NgForm){
      this.spinner.show();
      setTimeout(() => {
        form.reset()
        this.issueModel = {}
        this.initialIssueModelView()
        this.brands  = []
        this.users = []
        this.bufferBrands = []
        this.bufferUsers = []
        this.files = [];
        this.viewFiles =[]
          this.toastrService.success('', 'Reset All Information Successfully',
            {
              progressBar: true,
              titleClass : 'toast-title',
              progressAnimation: "increasing",
              timeOut: 2000
            });
            this.spinner.hide();
        }, 2000);
    }
  // ********* Fun save version as draft  ********
    saveDraft(){
      this.spinner.show();
      setTimeout(() => {
          this.toastrService.success('', 'Save Issue as Draft',
            {
              progressBar: true,
              titleClass : 'toast-title',
              progressAnimation: "increasing",
              timeOut: 2000
            });
            this.spinner.hide();
        }, 2000);
    }
  // ********* Add Issue ********
  addIssue(){
   this.issueModel.brands = this.bufferBrands
   this.issueModel.users = this.bufferUsers
   this.issueModel.issueName = this.issueModelView.issueName
   this.issueModel.choiceOne = this.issueModelView.choiceOne
   this.issueModel.choiceTow = this.issueModelView.choiceTow
   this.issueModel.choiceThree = this.issueModelView.choiceThree
   this.issueModel.note = this.issueModelView.note
   this.issueModel.attachments =  this.issueModel.attachments ? this.getFiles() : []
   this.spinner.show();
   setTimeout(() => {
    this.issues.push(this.issueModel)
      localStorage.setItem('issues', JSON.stringify(this.issues))
      this.toastrService.success('', 'Add Issue Successfully',
        {
          progressBar: true,
          titleClass : 'toast-title',
          progressAnimation: "increasing",
          timeOut: 3000
        });
        this.spinner.hide();
        this.router.navigate(['/'])
    }, 3000);
  }
  //  **** only for view in home page , so if i will send a request this code not exists *****
  getFiles(){
    let files =[]
    for (let index = 0; index < this.issueModel.attachments.length; index++) {
      files.push({
        name:this.issueModel.attachments[index].name,
        size:this.issueModel.attachments[index].size,
        type:this.issueModel.attachments[index].type,
        lastModified:this.issueModel.attachments[index].lastModified,
      })
    }
   return files
  }
  dropped(files: NgxFileDropEntry[]) {
    let maxFileSize = 1024 * 1024 *1024
    this.files = files;
    if(this.viewFiles.length > 2 || this.files.length > 3 ){
      this.toastrService.warning('', 'ONLY 3 Files Allowed',
      {
        progressBar: true,
        titleClass : 'toast-title',
        progressAnimation: "increasing",
        timeOut: 3000
      });
    }
    else{
      for (const droppedFile of files) {
        if (droppedFile.fileEntry.isFile) {
          const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
          console.log(fileEntry)
          fileEntry.file((file: File) => {
            if(file.size / 1024 / 1024 <= 3){
              this.viewFiles.push(file)
            }
            else{
              this.toastrService.error('', `File ${file.name} has size bigger 3 MB `,
              {
                progressBar: true,
                titleClass : 'toast-title',
                progressAnimation: "increasing",
                timeOut: 2000
              });
            }
            /**
            // You could upload it like this:
            const formData = new FormData()
            formData.append('logo', file, relativePath)

            // Headers
            const headers = new HttpHeaders({
              'security-token': 'mytoken'
            })
            this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
            .subscribe(data => {
              // Sanitized logo returned from backend
            })
            **/
          });
        } else {
          // It was a directory (empty directories are added, otherwise only files)
          this.toastrService.error('', 'ONLY Files Allowed',
          {
            progressBar: true,
            titleClass : 'toast-title',
            progressAnimation: "increasing",
            timeOut: 2000
          });
        }
      }
    this.issueModel.attachments = this.viewFiles.length > 3 ? this.viewFiles.slice(0, 3) : this.viewFiles
    }
  }
   humanFileSize(bytes, si=true, dp=1) {
    const thresh = si ? 1000 : 1024;
    if (Math.abs(bytes) < thresh) {
      return bytes + ' B';
    }
    const units = si
      ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
      : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    const r = 10**dp;
    do {
      bytes /= thresh;
      ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
    return bytes.toFixed(dp) + ' ' + units[u];
  }
}
