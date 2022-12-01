import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
  } from '@nestjs/common';
  
  import { UsersService } from './users.service';
  import { Users } from '../../entities/users.entity';
  import { CreateUsersDto, UpdateUsersDto } from './dto';
  
  @Controller('user')
  export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Get()
    async getUser(): Promise<Users[]> {
      return await this.userService.getUsers();
    }
  
    /*@Post()
    async createUser(
      @Body() createUserDto: CreateUsersDto,
    ): Promise<Users> {
      return await this.userService.createUser(
        createUserDto,
      );
    }
  
    @Put('/:id')
    async updateUser(
      @Param('id') id: string,
      @Body() updateUserDto: UpdateUsersDto,
    ): Promise<Users> {
      return await this.userService.updateUser(
        id,
        updateUserDto,
      );
    }
  
    @Delete('/:id')
    async deleteUser(@Param('id') id: string): Promise<Users> {
      return await this.userService.deleteUser(id);
    }*/
  }
  