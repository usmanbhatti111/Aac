import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RMQ_MESSAGES } from '@shared/constants';
import { DashboardService } from '../services/dashboard.service';
import {
  CreateDashboardtDTO,
  EmailedDashboardDTO,
  IdDto,
  ListDashboardDTO,
  FilterTicketDto,
  CreateAnnouncementDTO,
  DeleteDashboardDto,
  EditDashboardtDTO,
} from '@shared/dto';

@Controller()
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @MessagePattern(RMQ_MESSAGES.AIR_SERVICES.DASHBOARD.CREATE_DASHBOARD)
  public async addDashboard(@Payload() payload: CreateDashboardtDTO) {
    return this.dashboardService.addDashboard(payload);
  }

  @MessagePattern(RMQ_MESSAGES.AIR_SERVICES.DASHBOARD.EMAILED_DASHBOARD)
  public async sendDashboard(@Payload() payload: EmailedDashboardDTO) {
    return this.dashboardService.sendDashboard(payload);
  }

  @MessagePattern(RMQ_MESSAGES.AIR_SERVICES.DASHBOARD.GET_DASHBOARD_LIST)
  public async getDashboardList(@Payload() payload: ListDashboardDTO) {
    return this.dashboardService.getDashboardList(payload);
  }

  @MessagePattern(RMQ_MESSAGES.AIR_SERVICES.DASHBOARD.GET_DASHBOARD)
  public async getDashboardById(@Payload() payload: IdDto) {
    return this.dashboardService.getDashboardById(payload);
  }

  @MessagePattern(RMQ_MESSAGES.AIR_SERVICES.DASHBOARD.UPDATE_DASHBOARD)
  public async updateDashboard(@Payload() payload: CreateDashboardtDTO) {
    return this.dashboardService.addDashboard(payload);
  }
  @MessagePattern(RMQ_MESSAGES.AIR_SERVICES.DASHBOARD.GET_DASHBOARD_Tickets)
  public async getDashboardTickets(@Payload() payload: FilterTicketDto) {
    return this.dashboardService.getDashboardTickets(payload);
  }
  @MessagePattern(
    RMQ_MESSAGES.AIR_SERVICES.DASHBOARD.CREATE_DASHBOARD_ANNOUCEMENT
  )
  public async createDashboardAnnoucement(
    @Payload() payload: CreateAnnouncementDTO
  ) {
    return this.dashboardService.createDashboardAnnoucement(payload);
  }
  @MessagePattern(RMQ_MESSAGES.AIR_SERVICES.DASHBOARD.DELETE_DASHBOARD)
  deleteDashboard(@Payload() payload: DeleteDashboardDto) {
    return this.dashboardService.deleteDashboard(payload);
  }
  @MessagePattern(RMQ_MESSAGES.AIR_SERVICES.DASHBOARD.UPDATE_DASHBOARD)
  editDashboard(@Payload() payload: EditDashboardtDTO) {
    return this.dashboardService.editDashboard(payload);
  }
}
