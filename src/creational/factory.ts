interface IInsurance {
	id: number | null;
	status: string;
	setVehicle: (vehicle: any) => void;
	save: () => Promise<boolean>;
}

class ABInsurance implements IInsurance {
	constructor(
		private vehicle: string | null = null,
		public id: number | null = null,
		public status: string = 'initial') {
	}

	setVehicle(vehicle: any): void {
		this.vehicle = vehicle;
	}

	async save(): Promise<boolean> {
		try {
			const res = await fetch('http://ab', {
				method: 'POST',
				body: JSON.stringify({ vehicle: this.vehicle })
			});
			const data = await res.json();
			this.status = data.isSuccess ? 'success' : 'failure';
			return data.isSuccess;
		} catch (error) {
			return false;
		}
	}
}

class FTInsurance implements IInsurance {
	constructor(
		private vehicle: string | null = null,
		public id: number | null = null,
		public status: string = 'initial') {
	}

	setVehicle(vehicle: any): void {
		this.vehicle = vehicle;
	}

	async save(): Promise<boolean> {
		try {
			const res = await fetch('http://ft', {
				method: 'POST',
				body: JSON.stringify({ vehicle: this.vehicle })
			});
			const ins = await res.json();
			this.status = ins.OK ? 'success' : 'failure';
			this.id = ins.id;
			return ins.OK;
		} catch (error) {
			return false;
		}
	}
}

abstract class IInsuranceFactory {
	private db: IInsurance[] = [];

	abstract createInsurance(): IInsurance

	saveHistory(ins: IInsurance) {
		this.db.push(ins)
	}
}

class ABInsuranceFactory extends IInsuranceFactory {
	createInsurance(): ABInsurance {
		return new ABInsurance();
	}
}

class FTInsuranceFactory extends IInsuranceFactory {
	createInsurance(): FTInsurance {
		return new FTInsurance();
	}
}

const abInsFactory = new ABInsuranceFactory();
const abIns = abInsFactory.createInsurance();
abInsFactory.saveHistory(abIns);

const ftInsFactory = new FTInsuranceFactory();
const ftIns = abInsFactory.createInsurance();
ftInsFactory.saveHistory(ftIns);

/////
const INSURANCE_TYPE = {
	ab: ABInsurance,
	ft: FTInsurance,
}

type IT = typeof INSURANCE_TYPE;

class InsuranceFactoryAlt {
	db: IInsurance[] = [];

	createInsurance<T extends keyof IT>(type: T): IT[T] {
		return INSURANCE_TYPE[type];
	}

	saveHistory(ins: IInsurance) {
		this.db.push(ins);
	}
}

const insFactoryAlt = new InsuranceFactoryAlt();
const ins = new (insFactoryAlt.createInsurance('ab'));
insFactoryAlt.saveHistory(ins);
