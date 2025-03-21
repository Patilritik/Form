import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-sharepoint-addin';
}




// <!-- OLDER  -->
// <!-- <App xmlns="http://schemas.microsoft.com/sharepoint/2013/app/manifest"
//      Name="My Angular SharePoint Add-In"
//      Version="1.0.0.0"
//      ProductID="{2dbdf90b-912b-42b1-bf1c-21bf9c7e0d65}"
//      SharePointMinVersion="16.0.0.0">
  
//   <AppPrincipal>
//      <!-- ProductID="{00000000-0000-0000-0000-000000000000}" -->
//     <!-- <RemoteWebApplication ClientId="{YOUR_CLIENT_ID}" /> -->
//   </AppPrincipal>

//   <Properties>
//     <Title>My Angular SharePoint Add-In</Title>
//     <!-- <StartPage>{YOUR_APP_URL}/index.html</StartPage> -->
//      <StartPage>https://form-xi-self.vercel.app/</StartPage>
//     <!-- <StartPage>https://form-f76sft4ym-ritiks-projects-cb37fd76.vercel.app/</StartPage> -->
//   </Properties>
// </App> -->
