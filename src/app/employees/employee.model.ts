export class Employee{
	public name: string;
  public birthdate: string;
  public country: string;
  public username: string;
  public hireDate: string;
  public area: string;
  public jobTitle: string;
	public status: string;
  public tipRate: string;

  constructor(name: string, birthdate: string, country: string, username: string, hireDate: string, area: string, jobTitle: string, status: string, tipRate?: string) {
    this.name = name;
    this.birthdate = birthdate;
    this.country = country;
    this.username = username;
    this.hireDate = hireDate;
    this.area = area;
    this.jobTitle = jobTitle;
    this.status = status;
    this.tipRate = tipRate ? tipRate : "";
  }
}