import { DayEntity } from '../../day/day.entity';
import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';

export default class CreateDays implements Seeder {
    public async run(dataSource: DataSource): Promise<any> {

      const repository =  dataSource.getRepository(DayEntity);
        await repository.insert([
          { id: 1, day: 'monday' },
          { id: 2, day: 'tuesday' },
          { id: 3, day: 'wednesday' },
          { id: 4, day: 'thursday' },
          { id: 5, day: 'friday' },
          { id: 6, day: 'saturday' },
          { id: 7, day: 'sunday' },
        ]);
    }
}