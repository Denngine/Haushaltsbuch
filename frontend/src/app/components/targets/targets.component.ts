import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account/account.service';
import { UpdateService } from '../../services/update/update.service';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrl: './targets.component.scss'
})
export class TargetsComponent {
  accountId: number = -1;
  accounts: Account[] = [];

  constructor(
    private accountService: AccountService,
    private updateService: UpdateService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadAccounts();
    this.route.params.subscribe(params => {
      this.accountId = +params['id'];
      this.updateService.setAccountId(+params['id']);
    })
  }

  loadAccounts(){
    this.accountService.getAll().subscribe(
      (data => this.accounts = data))
  }
}
