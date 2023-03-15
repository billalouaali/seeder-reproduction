import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('day')
export class DayEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  day: string;
}