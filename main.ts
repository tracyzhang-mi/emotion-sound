input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    soundExpression.happy.playUntilDone()
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.twinkle.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Asleep)
    soundExpression.happy.playUntilDone()
})
basic.showIcon(IconNames.SmallHeart)
soundExpression.hello.playUntilDone()
basic.forever(function () {
	
})
