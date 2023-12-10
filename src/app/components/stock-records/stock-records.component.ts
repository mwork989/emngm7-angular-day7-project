import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { IStockDetails } from 'src/app/models/stock.model';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-records',
  templateUrl: './stock-records.component.html',
  styleUrls: ['./stock-records.component.css'],
})
export class StockRecordsComponent implements OnInit , OnDestroy{
  public stockRecords: IStockDetails[];

  public stockSubscription:Subscription;
  public timerSubscription:Subscription;

  constructor(public stockService: StockService) {
    this.stockRecords = [];
    this.stockSubscription = {} as Subscription;
    this.timerSubscription = {} as Subscription;
  }

  public ngOnInit(): void {
  //  this.stockRecords = this.stockService.getStocks();
    this.stockService.getStocks().subscribe(
      (data: IStockDetails[]) => {
        this.stockRecords = data;
        console.log(data)
      },
      (error: any) => console.error(error),
      () => console.log('Observable completed')
    );

    // this.stockService.getStockNumbers().subscribe(
    //   (stockNumbers: number) => {
        
    //     console.log('stockNumbers',stockNumbers)
    //   },
    //   (error: any) => console.error(error),
    //   () => console.log('stockNumbers Observable completed')
    // );


    //   this.stockSubscription=  this.stockService.getStockFromOperator().subscribe(
    //   (data: IStockDetails) => {
    //     this.stockRecords.push( data);
    //     console.log(data)
    //   },
    //   (error: any) => console.error(error),
    //   () => console.log('Observable completed')
    // );

  }

  public StartTimer(){
    const timerInterval = interval(2000)
    this.timerSubscription = timerInterval.subscribe((value:number)=>{
      console.log(value)
    })
  }
  // programmatically you can unsubscribe
  public StopTimer(){
    this.timerSubscription.unsubscribe()
  }
  // mandatory unsubsribe as a best practice to avoid memory leaks
   public ngOnDestroy(): void { 
    this.stockSubscription.unsubscribe()
    this.timerSubscription.unsubscribe()
  }
}
