import { NgModule } from '@angular/core';
import { OrderByPipe } from './../pipes/order-by/order-by';
@NgModule({
	declarations: [OrderByPipe],
	imports: [],
	exports: [OrderByPipe]
})
export class PipesModule {}
