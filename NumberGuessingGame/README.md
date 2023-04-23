# Number guessing game
## 기능 목록
- 턴 숫자 기록
    - 초기값 0
    - 1부터 10까지

- 숫자 입력받기
    - 1과 100 사이의 수
    - [checkGuessInput] 입력값이 1과 100 사이의 수가 아닐 경우 error

- [makeRandomNumber] 랜덤값 생성
    - 1과 100 사이의 수

- [printGuessInput] 제출한 숫자 출력
- 턴++
- [checkResult] 숫자 확인
    - 숫자 === 랜덤값이면 success -> Restart
    - 턴이 10이면 game over -> Restart
    - 턴이 10이 아니면 힌트 주기

- [isSuccess] success
    - 성공 메세지 출력
    - submit 버튼 비활성화
    - Restart 버튼 활성화

- [gameOver] game over
    - "Game Over" 메세지 출력
    - submit 버튼 비활성화
    - Restart 버튼 활성화

- [giveHint] 힌트 주기
    - 랜덤값 < 숫자 이면 "Number is high" 출력
    - 랜덤값 > 숫자 이면 "Number is low" 출력

- [showRestartBtn] restart 버튼 생성

- [Restart] restart 버튼 누르면 게임 다시 시작
    - 턴 숫자 초기화
    - UI 초기화
    - play() 