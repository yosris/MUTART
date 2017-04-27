USE [MUTART]
GO

/****** Object:  Table [dbo].[TblEmployees]    Script Date: 26/04/2017 01:00:35 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[TblEmployees](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](70) NOT NULL,
	[LastName] [nvarchar](70) NOT NULL,
	[Phone] [nvarchar](15) NULL,
	[Email] [nvarchar](50) NULL,
	[WorkHours] [decimal](18, 0) NOT NULL,
	[WageType] [tinyint] NOT NULL,
	[Wage] [int] NOT NULL,
	[Department] [tinyint] NOT NULL,
 CONSTRAINT [PK_TblEmployees] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


