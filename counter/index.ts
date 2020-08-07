import { canvas } from 'decentraland-ui-utils/utils/default-ui-comopnents'


/**
 * Displays a number on the center of the UI
 *
 * @param value starting value
 * @param xOffset position on X, to enable fitting several counters
 * @param yOffset position on Y, to enable fitting several counters
 * @param color text color
 * @param size text size
 *
 */

export class UICounter extends Entity {
	valueAsNum: number
	uiText: UIText
	constructor(
	  value: number,
	  xOffset?: number,
	  yOffset?: number,
	  color?: Color4,
	  size?: number
	) {
	  super()
	  this.valueAsNum = value
	  this.uiText = new UIText(canvas)
  
	  this.uiText.value = value.toString()
  
	  this.uiText.hAlign = 'right'
	  this.uiText.vAlign = 'bottom'
	  this.uiText.positionX = xOffset ? xOffset : 0
	  this.uiText.positionY = yOffset ? yOffset : 0
	  this.uiText.fontSize = size ? size : 25
	  this.uiText.vTextAlign = 'center'
	  this.uiText.hTextAlign = 'center'
	  this.uiText.color = color ? color : Color4.FromHexString('#53508F88')
	}
  
	public read(): number {
	  return this.valueAsNum
	}
	public increase(amount?: number): void {
	  this.valueAsNum += amount ? amount : 1
	  this.uiText.value = this.valueAsNum.toString()
	}
  
	public decrease(amount?: number): void {
	  this.valueAsNum -= amount ? amount : 1
	  this.uiText.value = this.valueAsNum.toString()
	}
  }