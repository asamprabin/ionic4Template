import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { ApiResponseInterface } from '../../../../../common/interfaces/apiResponseInterface';
import { Observable } from 'rxjs';
import { ProposalModalInterface } from '../../../../../common/interfaces/proposalModalInterface';
import { UpdateSupportOrOpposeInterface } from '../../../../../common/interfaces/updateSupportOrOpposeInterface';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  apiRoute = `${this.configService.api}/proposal`;

  constructor(
    private configService: ConfigService
  ) { }

  // Getting user proposals
  getUserProposals(userTrusting, userLocation, skipProposals): Observable<ApiResponseInterface> {
    return this.configService.contactApi('post', true, `${this.apiRoute}/getUserProposals`, {userTrusting, userLocation, skipProposals} );
  }

  // Getting proposal details from proposal Id
  getProposalDetailsFromId(proposalId: string) {
    return this.configService.contactApi('get', true, `${this.apiRoute}/getProposalDetailsFromId/${proposalId}`);
  }

  // Publishing new proposal
  publishProposal(proposal: ProposalModalInterface, userLocation: string) {
    return this.configService.contactApi('post', true, `${this.apiRoute}/publishProposal`, {proposal, userLocation} )
  }

  // Getting user latest proposal
  getUserLatestProposal() {
    return this.configService.contactApi('get', true, `${this.apiRoute}/getUserLatestProposal`);
  }

  // Supporting or Opposing proposal
  supportOrOpposeProposal(updateDetails: UpdateSupportOrOpposeInterface) {
    return this.configService.contactApi('post', true, `${this.apiRoute}/supportOrOpposeProposal`, updateDetails);
  }
}
