import http from 'k6/http';
import { sleep } from 'k6';

const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEyMSwiaWF0IjoxNzExNTQ4NDc2LCJleHAiOjE3MTE1NTIwNzZ9.fYnInjxrO5Kr6Ue7lOCLL6zZeG5ccJ3U9YdM88opu_w';

export default function () {
    let headers = {
        'Authorization': `Bearer ${authToken}`
    };

    let homeResponse = http.get('https://staging.ensuria.net/en/colleagues', { headers: headers });
    if (homeResponse.status !== 200) {
        console.error('Сolleagues page request failed');
    }

    let mapPageResponse = http.get('https://staging.ensuria.net/en/map', { headers: headers });
    if (mapPageResponse.status !== 200) {
        console.error('Map page request failed');
    }

    let usersPageResponse = http.get('https://staging.ensuria.net/en/users', { headers: headers });
    if (usersPageResponse.status !== 200) {
        console.error('Users page request failed');
    }

    let policiesPageResponse = http.get('https://staging.ensuria.net/en/policies', { headers: headers });
    if (policiesPageResponse.status !== 200) {
        console.error('Policies page request failed');
    }

    // let postData = { _entityName: "crm_colleagues", _permissionType: "read", id: 121, active: true, firstName: "Demo", lastName: "Demo", localFirstName: null, localMiddleName: null, localLastName: null, email: "test1@ensuria.com", phone: null, additionalPhone: null, gender: null, position: null, joiningDate: null, positionDescription: null, status: "offline", adminStatus: "active", locationId: null, location: null, city: null, notificationStatus: null, ssoOnly: null, partner: false, createdBy: null, updatedBy: 121, createdAt: "2024-02-19T12:33:23.435Z", updatedAt: "2024-03-27T09:55:50.230Z", deletedAt: null, department: null, languages: [], role: { _entityName: "crm_roles", _permissionType: "read", _linkedToSelf: true, _linkedToSubs: true, _linkedToLeader: true, id: 11, title: "Demo", weight: 1000, name: "Demo", description: null }, workModel: null, about: null, lastLoginInfo: { ip: "37.57.147.126", browser: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36" }, photo: null, blocked: false, _linkedToSelf: true, _linkedToSubs: false, _linkedToLeader: false, departmentId: null, leaderId: 1, leader: { _entityName: "crm_colleagues", _permissionType: "read", id: 1, active: true, firstName: "Mykola", lastName: "Golyash", localFirstName: "Микола", localMiddleName: "Сергійович", localLastName: "Голяш", email: "mykola.golyash@ensuria.com", phone: "380976529823", additionalPhone: null, gender: "male", position: "Chief Technology Officer", joiningDate: "2022-12-19", positionDescription: null, status: "offline", adminStatus: "active", locationId: 1, city: "Bukovel", notificationStatus: "enabled", ssoOnly: null, partner: false, createdBy: null, updatedBy: 1, createdAt: "2023-11-24T13:19:44.996Z", updatedAt: "2024-03-25T18:24:15.614Z", deletedAt: null, workModel: "remote", about: null, lastLoginInfo: { ip: "2a02:2378:102c:3e61:e54e:2fcc:b1d1:9b21", browser: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15" }, photo: null, blocked: false, _linkedToSelf: false, _linkedToSubs: false, _linkedToLeader: true, departmentId: null, leaderId: null } };
    // // let postData = { _entityName: "crm_colleagues", _permissionType: "read", id: 121, active: true, firstName: "Demo", lastName: "Demo", localFirstName: null, localMiddleName: null, localLastName: null, email: "test1@ensuria.com", phone: null, additionalPhone: null, gender: null, position: null, joiningDate: null, positionDescription: null, status: "offline", adminStatus: "active", locationId: null, location: null, city: null, notificationStatus: null, ssoOnly: null, partner: false, createdBy: null, updatedBy: 121, createdAt: "2024-02-19T12:33:23.435Z", updatedAt: "2024-03-27T09:55:50.230Z", deletedAt: null, department: null, languages: [], role: { _entityName: "crm_roles", _permissionType: "read", _linkedToSelf: true, _linkedToSubs: true, _linkedToLeader: true, id: 11, title: "Demo", weight: 1000, name: "Demo", description: null }, workModel: null, about: null, lastLoginInfo: { ip: "37.57.147.126", browser: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36" }, photo: null, blocked: false, _linkedToSelf: true, _linkedToSubs: false, _linkedToLeader: false, departmentId: null, leaderId: 1, leader: { _entityName: "crm_colleagues", _permissionType: "read", id: 1, active: true, firstName: "Mykola", lastName: "Golyash", localFirstName: "Микола", localMiddleName: "Сергійович", localLastName: "Голяш", email: "mykola.golyash@ensuria.com", phone: "380976529823", additionalPhone: null, gender: "male", position: "Chief Technology Officer", joiningDate: "2022-12-19", positionDescription: null, status: "offline", adminStatus: "active", locationId: 1, city: "Bukovel", notificationStatus: "enabled", ssoOnly: null, partner: false, createdBy: null, updatedBy: 1, createdAt: "2023-11-24T13:19:44.996Z", updatedAt: "2024-03-25T18:24:15.614Z", deletedAt: null, workModel: "remote", about: null, lastLoginInfo: { ip: "2a02:2378:102c:3e61:e54e:2fcc:b1d1:9b21", browser: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15" }, photo: null, blocked: false, _linkedToSelf: false, _linkedToSubs: false, _linkedToLeader: true, departmentId: null, leaderId: null } };
    // let postResponse = http.put('https://api-staging.ensuria.net/colleagues/121', JSON.stringify(postData), { headers: headers });
    // if (postResponse.status !== 200) {
    //     console.error('Put request failed');
    // }

    // Ожидание 2 секунд перед следующим запросом
    sleep(2);
}
