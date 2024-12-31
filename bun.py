import pandas as pd
import matplotlib.pyplot as plt
import japanize_matplotlib

# Excelファイルを読み込み
df = pd.read_csv("people_moved.csv", index_col=0)

print(df)

# 人口増減を計算
df["人口増減"] = df["2023年"] - df["2019年"]

# 人口増減の値が大きい順にデータをソート
df = df.sort_values(by="人口増減", ascending=False)

# 棒グラフを作成して表示
ax = df["人口増減"].plot(kind="bar", figsize=(10, 6))
ax.set_xticklabels(df.index, rotation=90)
ax.set_ylabel("人口増減")

# 画像として保存
plt.savefig("people.png")

# グラフを表示
plt.show()
